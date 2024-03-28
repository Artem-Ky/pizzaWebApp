import './Navigation.css'
import mainLogo from '../../assets/icons/navbar/mainLogo.svg'
import NavigationItem from './NavigationItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores/store'
import NavBlock from '../../UI/navigation/navBlock'
import navMapMenuLink from '../../functions/navMapMenuLink'
import { NavBarStatus } from '../../types'
import { Link } from 'react-router-dom'


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




const Navigation = () => {

  const { amount } = useSelector((state: RootState) => state.cart);

  const {menuLinkFirstColumn, menuLinkSecondColumn} = navMapMenuLink();

  return (
    <nav className="nav">
      <div className="nav__container nav__flex">
        <Link to="/">
          <img className="nav__logo" src={mainLogo} alt="Логотип  Марк пицца" />
        </Link>
        <ul>
          <NavigationItem
            title="Меню"
            className="nav__dropList"
            status={NavBarStatus.isMenuOpen}
            popUpList={
              <NavBlock
                title=""
                sizeClass="menuNavDropList"
                firstLinks={menuLinkFirstColumn}
                secondLinks={menuLinkSecondColumn}
              />
            }
          />
          <NavigationItem
            title="Акции"
            className="nav__dropList"
            status={NavBarStatus.isEventOpen}
            popUpList={
              <NavBlock
              title=""
              sizeClass="menuNavDropList"
              firstLinks={special}
              secondLinks={[]}
            />
            }
          />
          <NavigationItem
            title="Ещё"
            className="nav__dropList"
            status={NavBarStatus.isMoreOpen}
            popUpList={
              <NavBlock
              title=""
              sizeClass="menuNavDropList"
              firstLinks={moreFirstColumn}
              secondLinks={moreSecondColumn}
            />
            }
          />
          <li className="nav__item"><Link className='nav__link' to='#'>Вакансии</Link></li>
          <li className='nav__item nav__cart'><Link to='cart'>Корзина {amount > 0 && <span className='nav__cart-amount'>{amount}</span>}</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation