import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const baseUrl = process.env.SITE_URL ?? "http://localhost:3100";
const browser = await chromium.launch();

async function audit(name, width, height, openMenu = false) {
  const context = await browser.newContext({
    viewport: { width, height },
    locale: "pt-BR",
  });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);

  if (openMenu) {
    await page
      .getByRole("button", { name: "Abrir menu de navegação" })
      .click();
    await page.waitForTimeout(300);
  }

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
    .analyze();

  console.log(
    JSON.stringify(
      {
        name,
        violations: results.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          help: violation.help,
          nodes: violation.nodes.map((node) => ({
            target: node.target,
            summary: node.failureSummary,
          })),
        })),
      },
      null,
      2,
    ),
  );

  await context.close();
}

await audit("desktop", 1280, 800);
await audit("mobile", 375, 667);
await audit("mobile-menu", 375, 667, true);

await browser.close();
