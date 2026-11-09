import { chromium } from "playwright";

const baseUrl = process.env.SITE_URL ?? "http://localhost:3100";
const browser = await chromium.launch();

async function measure(name, width, height) {
  const context = await browser.newContext({
    viewport: { width, height },
    locale: "pt-BR",
  });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  const metrics = await page.evaluate(async () => {
    const navigation = performance.getEntriesByType("navigation")[0];
    const resources = performance.getEntriesByType("resource");

    let lcp = 0;
    let cls = 0;

    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      lcp = entries[entries.length - 1]?.startTime ?? 0;
    });
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) cls += entry.value;
      }
    });
    clsObserver.observe({ type: "layout-shift", buffered: true });

    await new Promise((resolve) => setTimeout(resolve, 800));

    lcpObserver.disconnect();
    clsObserver.disconnect();

    const byType = {};
    for (const resource of resources) {
      const type = resource.initiatorType || "other";
      byType[type] = (byType[type] ?? 0) + (resource.transferSize ?? 0);
    }

    return {
      domContentLoaded: Math.round(navigation.domContentLoadedEventEnd),
      load: Math.round(navigation.loadEventEnd),
      transferKB: Math.round(
        resources.reduce(
          (total, resource) => total + (resource.transferSize ?? 0),
          0,
        ) / 1024,
      ),
      byType: Object.fromEntries(
        Object.entries(byType).map(([type, bytes]) => [
          type,
          `${Math.round(bytes / 1024)} KB`,
        ]),
      ),
      lcp: Math.round(lcp),
      cls: Number(cls.toFixed(4)),
      resourceCount: resources.length,
    };
  });

  console.log(JSON.stringify({ name, ...metrics }, null, 2));
  await context.close();
}

await measure("desktop", 1280, 800);
await measure("mobile", 375, 667);

await browser.close();
