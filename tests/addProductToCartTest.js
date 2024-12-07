import puppeteer from 'puppeteer';

async function testLogin() {
  console.log("Запустить браузер");
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  });

  console.log("Открыть вкладку браузера");
  const page = await browser.newPage();

  console.log("Открыть страницу");
  await page.goto("http://localhost:5173");

  console.log("Задать разрешение страницы");
  await page.setViewport({ width: 1080, height: 1024 });

  console.log("Убеждаемся, что есть хотябы 1 продукт")
  const productCategoryFirstBlockFirstProductSelect = await page.$(".category:nth-child(1) .product-cart")
  if (!productCategoryFirstBlockFirstProductSelect) {
    console.log("В первом блоке с продуктами нет ни 1 продукта")
    await browser.close();
  }

  console.log("добавляем продукт в корзину")
  const addButtonSelect = await page.$(".category:nth-child(1) .product-cart .order-panel__btn")
  if (!addButtonSelect) {
    console.log("Кнопка отсутствует")
    await browser.close();
  }

  await addButtonSelect.click();

  console.log("добавляем продукт в корзину")
  const cartCountSelect = await page.$(".nav__cart-amount")
  if (!cartCountSelect) {
    console.log("Товар не был добавлен")
    await browser.close();
  }


  console.log("Закрыть браузер");
  await browser.close();
}

testLogin();
