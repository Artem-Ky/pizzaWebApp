import { useInView } from "react-intersection-observer"
import { IProductCart, ICartProduct } from "../../../types";
import { useAppDispatch } from "../../../customHooks/redux/redux";
import { addToCart } from "../../../stores/slices/cartSlice/cartSlice";



const ProductCart: React.FC<IProductCart> = ({id, img, title, descr, cost}) => {

    const dispatch = useAppDispatch();

    const onClickAdd = () => {
        const item: ICartProduct = {
          id,
          name: title,
          cost,
          count: 1,
        };
        dispatch(addToCart(item));
      };

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
            <a onClick={onClickAdd} className="order-panel__btn">Выбрать</a>
        </div>
    </article>
  )
}

export default ProductCart