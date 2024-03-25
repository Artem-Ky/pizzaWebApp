import { HeaderLinkProps } from '../../types'
import './HeaderOrFooterLink.css'



const HeaderOrFooterLink: React.FC<HeaderLinkProps> = ({url, title, linkClass}) => {
  return (
    <li className={`item`}><a className={`item item__link ${linkClass}`} href={url}>{title}</a></li>
  )
}

export default HeaderOrFooterLink