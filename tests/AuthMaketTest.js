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
  await page.goto("http://localhost:5173/login");

  console.log("Задать разрешение страницы")
  await page.setViewport({ width: 1080, height: 1024 })

  const loginFormSelect = await page.$("#login")
  if (!loginFormSelect) {
    console.log("Нет формы логина")
  }

  const phoneInputSelect = await page.$("#login_phoneNumber")
  if (!phoneInputSelect) {
    console.log("Нет инпута с вводом телефона в форме")
  }

  const passwordInputSelect = await page.$("#login_password")
  if (!passwordInputSelect) {
    console.log("Нет инпута с вводом пароля в форме")
  }

  const submitButtonSelect = await page.$(`#login button[type="submit"]`)
  if (!submitButtonSelect) {
    console.log("Нет кнопки войти в форме авторизации")
  }

  const regLinkSelect = await page.$(`#login a[href="/register"]`)
  if (!regLinkSelect) {
    console.log("Нет предложения зарегистрироваться (ссылки)")
  }

  console.log("Закрыть браузер")
  await browser.close()
}

testLayout()
