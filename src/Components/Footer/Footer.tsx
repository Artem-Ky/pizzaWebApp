import FooterBlog from "../../UI/navigation/navBlock"
import './Footer.css'
import { HeaderLinkProps } from '../../types';
import navMapMenuLink from "../../functions/navMapMenuLink";




//#region special
const special = [
  {
    url: "#",
    title: "Общие",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "МаркФабрика Плюс",
    linkClass: "item__link-footer",
  }
]
//#endregion
//#region moreFirstColumn
const moreFirstColumn = [
  {
    url: "#",
    title: "Зона доставки",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "Контакты",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "Франшиза",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "График работы",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "О компании",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "Ищем поставщиков",
    linkClass: "item__link-footer",
  }
]
//#endregion
//#region moreSecondColumn
const moreSecondColumn = [
  {
    url: "#",
    title: "Инвестиции",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "Калорийность и состав",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "Помощь",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "Оплата для юридических лиц",
    linkClass: "item__link-footer",
  },
  {
    url: "#",
    title: "Подписка МаркФабрика Плюс",
    linkClass: "item__link-footer",
  }
]
//#endregion



const Footer = () => {

  const {menuLinkFirstColumn, menuLinkSecondColumn} = navMapMenuLink();

  return (
    <div className="background-wrapper">
    <footer className="container footer">
        <nav className="footer__nav">
            <FooterBlog sizeClass="flex-2"  title='Меню' firstLinks={menuLinkFirstColumn} secondLinks={menuLinkSecondColumn}/>
            <FooterBlog sizeClass="flex-1"  title='Акции' firstLinks={special} secondLinks={[]}/>
            <FooterBlog sizeClass="flex-4"  title='Еще' firstLinks={moreFirstColumn} secondLinks={moreSecondColumn}/>
            <a className="footer__nav-link blog__title flex-2" href='#' target="_blank" rel="nofollow noopener noreferrer">Вакансии</a>
        </nav>
        <div className="footer__social">
          <div className="footer__social-apps">
            <div className="footer__social-title">
              <span className="container-row">Приложения</span>
              <span className="container-row">для мобильных устройств</span>
            </div>
            <div className="footer__social-items">
              <div className="container-row">
                <a className="footer__social-link footer__social-item_ios" target="_blank" href="#" rel="nofollow noreferrer" aria-label="Мобильное приложение ios"></a>
              </div>
              <div className="container-row">
                <a className="footer__social-link footer__social-item_android" target="_blank" href="#" rel="nofollow noreferrer" aria-label="Мобильное приложение android"></a>
              </div>
            </div>
            <div className="footer__social-nets">
              <div className="container-row">
                <a className="footer__icon-vk" target="_blank" href="#" rel="nofollow noreferrer" aria-label="мы в вконтакте"></a>
              </div>
              <div className="container-row">
                <a className="footer__icon-youtube" target="_blank" href="#" rel="nofollow noreferrer" aria-label="мы на ютубе"></a>
              </div>
              <div className="container-row last">
                <a className="footer__icon-telegram" target="_blank" href="#" rel="nofollow noreferrer" aria-label="мы в телеграме"></a>
              </div>
            </div>
          </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer