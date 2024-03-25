import './Navigation.css'
import mainLogo from '../../assets/icons/navbar/mainLogo.svg'
import NavigationItem from './NavigationItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores/store'
import NavBlock from '../../UI/navigation/navBlock'
import navMapMenuLink from '../../functions/navMapMenuLink'
import { NavBarStatus } from '../../types'

const Navigation = () => {

  const { amount } = useSelector((state: RootState) => state.cart);

  const {menuLinkFirstColumn, menuLinkSecondColumn} = navMapMenuLink();

  return (
    

    <nav className="nav">
      <div className="nav__container nav__flex">
        <a href=''><img
          className="nav__logo"
          src={mainLogo}
          alt="Логотип  Марк пицца"
        /></a>
        <ul>
          <NavigationItem title="Меню" className="nav__dropList" status={NavBarStatus.isMenuOpen} popUpList={<NavBlock title='' sizeClass='menuNavDropList' firstLinks={menuLinkFirstColumn} secondLinks={menuLinkSecondColumn}/>}/>
          <NavigationItem title="Акции" className="nav__dropList" status={NavBarStatus.isEventOpen} popUpList=''/>
          <NavigationItem title="Ещё" className="nav__dropList" status={NavBarStatus.isMoreOpen} popUpList=''/>
          <NavigationItem
            title={
              <a href="#" className="nav__link">
                Вакансии
              </a>
            }
            className=""
            status={NavBarStatus.isClose}
            popUpList=''
          />
          <NavigationItem
            title={
              <>
                Корзина {amount > 0 && <span className="nav__cart-amount">{amount}</span>}
              </>
            }
            className="nav__cart"
            status={NavBarStatus.isClose}
            popUpList=''
          />
  
        </ul>
      </div>
    </nav>
  );
}

export default Navigation