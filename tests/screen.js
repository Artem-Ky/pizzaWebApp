import puppeteer from 'puppeteer';

async function testScreen() {
  console.log("Запустить браузер");
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 1000,
  });

  console.log("Открыть вкладку браузера");
  const page = await browser.newPage();

  console.log("Открыть страницу");
  await page.goto("http://localhost:5173");

  console.log("Задать разрешение страницы");
  await page.setViewport({ width: 1080, height: 1024 });

  await page.screenshot({ path: "screen.png" });

  console.log("Закрыть браузер");
  await browser.close();
}

testScreen();
