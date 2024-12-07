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

  await page.goto("http://localhost:5173/cart", { waitUntil: "domcontentloaded" });

  try {
    await page.waitForSelector('.cart__title', { timeout: 15000 });
    console.log("Успешная авторизация, переход в корзину");
  } catch (e) {
    console.error("Неуспешный переход в корзину");
    await browser.close();
  }

  const cartTitleSelect = await page.$(`.cart__title`)
  if (!cartTitleSelect) {
    console.log("Нет заголовка корзины")
  }

  const deliveryTitleSelect = await page.$(`.delivery`)
  if (!deliveryTitleSelect) {
    console.log("Нет секции доставки")
  }


  const deliveryAddressSelect = await page.$(`input[name="address_house"]`)
  if (!deliveryAddressSelect) {
    console.log("Нет ввода дома и улицы")
  }

  const deliveryAddressApartSelect = await page.$(`input[name="address_apart"]`)
  if (!deliveryAddressApartSelect) {
    console.log("Нет ввода квартиры")
  }

  const deliveryAddressEntrSelect = await page.$(`input[name="address_entr"]`)
  if (!deliveryAddressEntrSelect) {
    console.log("Нет ввода подъезда")
  }

  const deliveryAddressFloorSelect = await page.$(`input[name="address_floor"]`)
  if (!deliveryAddressFloorSelect) {
    console.log("Нет ввода этажа")
  }

  const deliveryPhoneSelect = await page.$(`input[name="phone"]`)
  if (!deliveryPhoneSelect) {
    console.log("Нет ввода телефона")
  }

  const deliveryNameSelect = await page.$(`input[name="name"]`)
  if (!deliveryNameSelect) {
    console.log("Нет ввода имени")
  }

  const deliveryBtnSelect = await page.$(`.pay__btn`)
  if (!deliveryBtnSelect) {
    console.log("Нет кнопки оплатить")
  }

  console.log("Закрыть браузер");
  await browser.close();
}

testLogin();
