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
  await page.goto("http://localhost:5173/login");

  console.log("Задать разрешение страницы");
  await page.setViewport({ width: 1080, height: 1024 });

  console.log("Проверить наличие формы логина");
  const loginFormSelect = await page.$("#login");
  if (!loginFormSelect) {
    console.error("Нет формы логина");
    await browser.close();
    return;
  }

  console.log("Ввести номер телефона");
  const phoneInputSelect = await page.$("#login_phoneNumber");
  if (!phoneInputSelect) {
    console.error("Нет инпута с вводом телефона в форме");
    await browser.close();
    return;
  }
  await phoneInputSelect.type("9999999999");

  console.log("Ввести пароль");
  const passwordInputSelect = await page.$("#login_password");
  if (!passwordInputSelect) {
    console.error("Нет инпута с вводом пароля в форме");
    await browser.close();
    return;
  }
  await passwordInputSelect.type("QWEewq123@");

  console.log("Нажать кнопку войти");
  const submitButtonSelect = await page.$('#login button[type="submit"]');
  if (!submitButtonSelect) {
    console.error("Нет кнопки войти в форме авторизации");
    await browser.close();
    return;
  }
  await submitButtonSelect.click();

  console.log("Ожидание перехода");

  try {
    await page.waitForSelector('.product__container', { timeout: 5000 });
    console.log("Успешная авторизация, переход на главную страницу");
  } catch (e) {
    console.error("Неуспешная авторизация");
    await browser.close();
  }

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

  await page.goto("http://localhost:5173/cart", { waitUntil: "domcontentloaded" });

  try {
    await page.waitForSelector('.cart__title', { timeout: 15000 });
    console.log("Успешная авторизация, переход в корзину");
  } catch (e) {
    console.error("Неуспешный переход в корзину");
    await browser.close();
  }

  console.log("увеличивам количество товара в корзине на 1")
  const cartProductPlusSelect = await page.$(".cart-item__incr")
  if (!cartProductPlusSelect) {
    console.log("нет кнопки +")
    await browser.close();
  }

  await cartProductPlusSelect.click();

  console.log("количество товара = 2")
  const cartProductCountSelect = await page.$(".cart-item__count")
  if (!cartProductCountSelect) {
    console.log("не удалось увеличить количество товара")
    await browser.close();
  }

  const cartProductCountText = await page.evaluate(
    (element) => element.textContent.trim(),
    cartProductCountSelect
  );
  
  if (cartProductCountText === "-2+") {
    console.log("Количество товара успешно увеличилось до 2");
  } else {
    console.log(`Ожидалось количество товара = 2, но получено ${cartProductCountText}`);
  }

  console.log("Закрыть браузер");
  await browser.close();
}

testLogin();
