
import LinkHeader from '../../UI/HeadeOrFooterLink/HeaderOrFooterLink'
import './Header.css'



const Header = () => {
  return (
    <header className="header__background">
      <ul className="header header__container">
        <LinkHeader url={'#'} title='Иваново' linkClass='link__place'/>
        <LinkHeader url={'tel:+70000000000'} title='+7-xxx-xxx-xx-xx' linkClass='link__phone'/>
        <LinkHeader url={'#'} title='Сегодня с 09:50 до 00:00' linkClass='link__underline link__time'/>
        <LinkHeader url={'profile'} title='Личный кабинет' linkClass='link__lk item__last-child'/>
      </ul>
    </header>
  )
}

export default Header