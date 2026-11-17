const { chromium } = require("playwright");

const url = process.argv[2];
const output = process.argv[3];

(async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
	await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

	await page.evaluate(async () => {
		await new Promise((resolve) => {
			let totalHeight = 0;
			const distance = 300;
			const timer = setInterval(() => {
				const scrollHeight = document.body.scrollHeight;
				window.scrollBy(0, distance);
				totalHeight += distance;
				if (totalHeight >= scrollHeight) {
					clearInterval(timer);
					resolve();
				}
			}, 100);
		});
	});

	await page.waitForTimeout(3000);
	await page.screenshot({ path: output, fullPage: true });
	await browser.close();
})();
