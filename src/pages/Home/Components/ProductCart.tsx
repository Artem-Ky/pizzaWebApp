import { useInView } from "react-intersection-observer"
import { CartItemProps } from "../../../types";



const ProductCart: React.FC<CartItemProps> = ({img, title, descr, cost}) => {

    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true
    });


  return (
    <article className="product-cart">
        <div ref={ref} className="product-cart__img ">
            {inView ?
                <picture>
                    <source media="(min-device-pixel-ratio: 2)" data-srcset={img} srcSet={img}/>
                    <img data-src={img} alt={title} src={img}/>
                </picture>
                : <div className="product-card__skeleton"></div>
            }
        </div>
        <div className="product-cart__info">
            <h3 className="info__name">{title}</h3>
            <p className="info__descr">{descr}</p>
        </div>
        <div className="product-card__order-panel">
            <span className="order-panel__cost">{`от ${cost}`}</span>
            <a className="order-panel__btn" href="">Выбрать</a>
        </div>
    </article>
  )
}

export default ProductCart