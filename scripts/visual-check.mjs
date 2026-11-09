import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.SITE_URL ?? "http://localhost:3100";
const outDir =
  process.env.SHOT_DIR ??
  "C:/Users/Elias/AppData/Local/Temp/opencode/site-check";

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const errors = [];

async function inspect(page, label) {
  return page.evaluate(
    ({ label }) => {
      const parseColor = (value) => {
        const match = value.match(/rgba?\(([^)]+)\)/);
        if (!match) return null;

        const parts = match[1]
          .split(/[\s,/]+/)
          .filter(Boolean)
          .map(Number);

        return {
          r: parts[0],
          g: parts[1],
          b: parts[2],
          a: parts[3] === undefined ? 1 : parts[3],
        };
      };

      const composite = (foreground, background) => ({
        r: foreground.r * foreground.a + background.r * (1 - foreground.a),
        g: foreground.g * foreground.a + background.g * (1 - foreground.a),
        b: foreground.b * foreground.a + background.b * (1 - foreground.a),
        a: 1,
      });

      const luminance = ({ r, g, b }) => {
        const channel = (value) => {
          const normalized = value / 255;
          return normalized <= 0.04045
            ? normalized / 12.92
            : Math.pow((normalized + 0.055) / 1.055, 2.4);
        };

        return (
          0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
        );
      };

      const contrast = (first, second) => {
        const lighter = Math.max(luminance(first), luminance(second));
        const darker = Math.min(luminance(first), luminance(second));
        return (lighter + 0.05) / (darker + 0.05);
      };

      const effectiveBackground = (element) => {
        const layers = [];
        let node = element;

        while (node) {
          const color = parseColor(getComputedStyle(node).backgroundColor);
          if (color && color.a > 0) layers.push(color);
          node = node.parentElement;
        }

        let background = { r: 255, g: 255, b: 255, a: 1 };
        for (let index = layers.length - 1; index >= 0; index -= 1) {
          background = composite(layers[index], background);
        }

        return background;
      };

      const isVisible = (element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          Number(style.opacity) > 0 &&
          rect.width > 1 &&
          rect.height > 1
        );
      };

      const textElements = Array.from(
        document.querySelectorAll("body *"),
      ).filter(
        (element) =>
          isVisible(element) &&
          Array.from(element.childNodes).some(
            (node) => node.nodeType === 3 && node.textContent.trim(),
          ),
      );

      const contrastFailures = [];

      for (const element of textElements) {
        const style = getComputedStyle(element);
        const foreground = parseColor(style.color);
        if (!foreground) continue;

        const background = effectiveBackground(element);
        const solidForeground = composite(foreground, background);
        const ratio = contrast(solidForeground, background);
        const fontSize = Number.parseFloat(style.fontSize);
        const fontWeight = Number(style.fontWeight) || 400;
        const isLarge =
          fontSize >= 24 ||
          (fontSize >= 18.66 && fontWeight >= 700);
        const required = isLarge ? 3 : 4.5;

        if (ratio < required) {
          contrastFailures.push({
            text: element.textContent.trim().replace(/\s+/g, " ").slice(0, 60),
            tag: element.tagName,
            className: String(element.className).slice(0, 90),
            fontSize,
            ratio: Number(ratio.toFixed(2)),
            required,
          });
        }
      }

      const clippedText = textElements
        .filter((element) => {
          const style = getComputedStyle(element);
          return (
            style.overflow !== "visible" &&
            element.clientWidth > 0 &&
            element.scrollWidth > element.clientWidth + 1
          );
        })
        .map((element) => ({
          text: element.textContent.trim().replace(/\s+/g, " ").slice(0, 60),
          className: String(element.className).slice(0, 90),
          clientWidth: element.clientWidth,
          scrollWidth: element.scrollWidth,
        }));

      const containers = Array.from(
        document.querySelectorAll(".max-w-6xl"),
      ).map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
        };
      });

      const cardGrids = Array.from(
        document.querySelectorAll("#sobre .grid, #competencias .grid, #projetos .grid"),
      )
        .map((grid) => {
          const cards = Array.from(grid.children).filter((child) =>
            child.matches('[data-slot="card"]'),
          );

          if (cards.length < 2) return null;

          const rows = new Map();
          for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const key = Math.round(rect.top);
            const heights = rows.get(key) ?? [];
            heights.push(Math.round(rect.height));
            rows.set(key, heights);
          }

          return Array.from(rows.entries()).map(([top, heights]) => ({
            top,
            heights,
            difference: Math.max(...heights) - Math.min(...heights),
          }));
        })
        .filter(Boolean)
        .flat();

      const interactive = Array.from(
        document.querySelectorAll("a, button"),
      ).filter(isVisible);

      const smallTargets = interactive
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            name:
              element.getAttribute("aria-label") ||
              element.textContent.trim().replace(/\s+/g, " ").slice(0, 40),
            tag: element.tagName,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          };
        })
        .filter((target) => target.width < 24 || target.height < 24);

      const internalLinks = Array.from(
        document.querySelectorAll('a[href^="#"]'),
      ).map((link) => {
        const href = link.getAttribute("href");
        return {
          href,
          targetExists: href === "#" ? false : Boolean(document.querySelector(href)),
        };
      });

      return {
        label,
        viewport: { width: window.innerWidth, height: window.innerHeight },
        document: {
          width: document.documentElement.scrollWidth,
          height: document.documentElement.scrollHeight,
        },
        horizontalOverflow:
          document.documentElement.scrollWidth > window.innerWidth + 1,
        bodyFont: getComputedStyle(document.body).fontFamily,
        h1: document.querySelector("h1")?.textContent,
        h1Count: document.querySelectorAll("h1").length,
        sectionHeight: Array.from(
          document.querySelectorAll("main > section"),
        ).map((section) => ({
          id: section.id,
          height: Math.round(section.getBoundingClientRect().height),
        })),
        containers,
        cardRowHeights: cardGrids,
        contrastFailures: contrastFailures.slice(0, 20),
        clippedText: clippedText.slice(0, 10),
        smallTargets: smallTargets.slice(0, 15),
        brokenInternalLinks: internalLinks.filter((link) => !link.targetExists),
      };
    },
    { label },
  );
}

async function capture(name, width, height) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    locale: "pt-BR",
    permissions: ["clipboard-read", "clipboard-write"],
  });
  const page = await context.newPage();

  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(`[${name}] console: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    errors.push(`[${name}] pageerror: ${error.message}`);
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1100);

  const metrics = await inspect(page, name);
  console.log(JSON.stringify(metrics, null, 2));

  await page.screenshot({
    path: path.join(outDir, `${name}-viewport.png`),
  });
  await page.screenshot({
    path: path.join(outDir, `${name}-full.png`),
    fullPage: true,
  });

  if (name === "mobile") {
    await page
      .getByRole("button", { name: "Abrir menu de navegação" })
      .click();
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(outDir, `${name}-menu.png`),
    });
    console.log(
      `MOBILE MENU VISIBLE: ${await page
        .getByRole("navigation", { name: "Navegação mobile" })
        .isVisible()}`,
    );

    await page.getByRole("link", { name: "Projetos" }).click();
    await page.waitForTimeout(600);
    console.log(
      `MOBILE MENU CLOSED AFTER LINK: ${!(
        await page
          .getByRole("navigation", { name: "Navegação mobile" })
          .isVisible()
      )}`,
    );
  }

  if (name === "desktop") {
    const copyButton = page.getByRole("button", {
      name: "Copiar endereço de e-mail",
    });
    await copyButton.scrollIntoViewIfNeeded();
    await copyButton.click();
    await page.waitForTimeout(300);
    console.log(
      `COPY BUTTON STATE: ${await page
        .getByRole("button", { name: "E-mail copiado" })
        .count()}`,
    );

    const projectsLink = page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Projetos" });
    await projectsLink.click();
    await page.waitForTimeout(800);
    console.log(
      `PROJECT SECTION TOP AFTER NAV: ${await page
        .locator("#projetos")
        .evaluate((element) => Math.round(element.getBoundingClientRect().top))}`,
    );
  }

  await context.close();
}

await capture("desktop", 1280, 800);
await capture("mobile", 375, 667);

console.log("CONSOLE ERRORS:", JSON.stringify(errors, null, 2));
await browser.close();
