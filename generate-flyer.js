import puppeteer from 'puppeteer';

async function generateFlyer() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to A4 size (210mm x 297mm at 300 DPI)
  await page.setViewport({
    width: 2480, // 210mm at 300 DPI
    height: 3508, // 297mm at 300 DPI
    deviceScaleFactor: 1
  });

  // Generate front flyer
  await page.goto('http://127.0.0.1:8080/flyer-front.html', {
    waitUntil: 'networkidle0'
  });

  // Wait a bit for images to load
  await page.waitForTimeout(2000);

  // Take screenshot
  await page.screenshot({
    path: 'flyer-front.png',
    fullPage: true
  });

  console.log('Flyer front PNG generated successfully!');

  // Generate back flyer
  await page.goto('http://127.0.0.1:8080/flyer-back.html', {
    waitUntil: 'networkidle0'
  });

  // Wait a bit for images to load
  await page.waitForTimeout(2000);

  // Take screenshot
  await page.screenshot({
    path: 'flyer-back.png',
    fullPage: true
  });

  await browser.close();
  console.log('Flyer back PNG generated successfully!');
}

generateFlyer().catch(console.error);