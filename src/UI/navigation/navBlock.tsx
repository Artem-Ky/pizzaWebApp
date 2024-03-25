import LinkHeader from '../HeadeOrFooterLink/HeaderOrFooterLink';
import { FooterBlogProps } from '../../types';




const NavBlock: React.FC<FooterBlogProps> = ({title,secondLinks, firstLinks, sizeClass}) => {
  return (
    <div className={`blog ${sizeClass}`}>
      {title && <div className="blog__title">{title}</div>}
      <div className="blog__container">
        <ul className={`blog__links`}>
          {firstLinks.map((firstLinks, index) => (
            <LinkHeader
              key={index}
              url={firstLinks.url}
              title={firstLinks.title}
              linkClass={firstLinks.linkClass + ' blog__link-mb'}
            />
          ))}
        </ul>
        {secondLinks.length > 0 && (
          <ul className={`blog__links`}>
            {secondLinks.map((secondLinks, index) => (
              <LinkHeader
                key={index}
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