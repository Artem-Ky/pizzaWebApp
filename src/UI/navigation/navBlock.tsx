import Link from '../HeadeOrFooterLink/HeaderOrFooterLink';
import { IFooterBlog } from '../../types';
import './navBlock.css'



const NavBlock: React.FC<IFooterBlog> = ({title,secondLinks, firstLinks, sizeClass}) => {
  return (
    <div className={`blog ${sizeClass}`}>
      {title && <div className="blog__title">{title}</div>}
      <div className="blog__container">
        <ul className={`blog__links`}>
          {firstLinks?.map((firstLinks) => (
            <Link
            key={`first-${firstLinks.id}`}
              url={firstLinks.url}
              title={firstLinks.title}
              linkClass={firstLinks.linkClass + ' blog__link-mb'}
            />
          ))}
        </ul>
        {secondLinks?.length > 0 && (
          <ul className={`blog__links`}>
            {secondLinks?.map((secondLinks) => (
              <Link
                key={`second-${secondLinks.id}`}
                url={secondLinks.url}
                title={secondLinks.title}
                linkClass={secondLinks.linkClass + ' blog__link-mb'}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBlock