import { Link } from 'react-router-dom'
import { IHeaderLink } from '../../types'
import './HeaderOrFooterLink.css'



const HeaderOrFooterLink: React.FC<IHeaderLink> = ({url, title, linkClass}) => {
  return (
    <li className={`item`}>
      <Link
        className={`item item__link ${linkClass}`}
        to={`/${url}`}
      >
        {title}
      </Link>
    </li>
  );
}

export default HeaderOrFooterLink