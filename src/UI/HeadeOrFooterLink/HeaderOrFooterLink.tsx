import { Link } from 'react-router-dom'
import { HeaderLinkProps } from '../../types'
import './HeaderOrFooterLink.css'



const HeaderOrFooterLink: React.FC<HeaderLinkProps> = ({url, title, linkClass}) => {
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