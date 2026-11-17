const { chromium } = require("playwright");

const url = process.argv[2];
const output = process.argv[3];

(async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
	await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

	// Remove common overlays/toasts and the Prescripto "Built with" section.
	await page.evaluate(() => {
		document
			.querySelectorAll(
				'.Toastify__toast-container, [role="alert"], [class*="toast" i], [class*="Toast" i]'
			)
			.forEach((el) => el.remove());

		document.querySelectorAll("section").forEach((el) => {
			if (el.textContent.includes("Built with")) el.remove();
		});
	});

	// Scroll to bottom to trigger lazy-loaded images.
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

	// Wait a bit for images to load after scrolling.
	await page.waitForTimeout(3000);

	// Remove any toasts that appeared after scrolling.
	await page.evaluate(() => {
		document
			.querySelectorAll(
				'.Toastify__toast-container, [role="alert"], [class*="toast" i], [class*="Toast" i]'
			)
			.forEach((el) => el.remove());
	});

	await page.screenshot({ path: output, fullPage: true });
	await browser.close();
})();
