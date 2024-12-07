import puppeteer from 'puppeteer';

async function testLayout() {
  console.log("Запустить браузер")
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  })

  console.log("Открыть вкладку браузера")
  const page = await browser.newPage()

  console.log("Открыть страницу")
  await page.goto("http://localhost:5173");

  console.log("Задать разрешение страницы")
  await page.setViewport({ width: 1080, height: 1024 })

  const productContainerSelect = await page.$(".product__container")
  if (!productContainerSelect) {
    console.log("Не найден элемент с блоками продуктов")
  }

  const productCategoryFirstBlockSelect = await page.$(".category:nth-child(1)")
  if (!productCategoryFirstBlockSelect) {
    console.log("Не найдена ни 1 категория продуктов в контейнере")
  }

  const productCategoryFirstBlockTitleSelect = await page.$(".category:nth-child(1) .category__title")
  if (!productCategoryFirstBlockTitleSelect) {
    console.log("В первом блоке с продуктами нет заголовка с названием категории")
  }

  const productCategoryFirstBlockFirstProductSelect = await page.$(".category:nth-child(1) .product-cart")
  if (!productCategoryFirstBlockFirstProductSelect) {
    console.log("В первом блоке с продуктами нет ни 1 продукта")
  }

  console.log("Закрыть браузер")
  await browser.close()
}

testLayout()
