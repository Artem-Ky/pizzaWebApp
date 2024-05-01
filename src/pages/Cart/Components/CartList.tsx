import { useAppDispatch, useAppSelector } from '../../../customHooks/redux/redux';
import { addToCart, clearFromCart, removeFromCart } from '../../../stores/slices/cartSlice/cartSlice';
import { ICartProduct } from '../../../types';
import './Cart.css'


const CartList = () => {
  const { cartList } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const handleIncrement = (product: ICartProduct) => {
    dispatch(addToCart(product));
  };
  const handleDecrement = (product: ICartProduct) => {
    dispatch(removeFromCart(product));
  };
  const handleClearFromCart = (id: number) => {
    dispatch(clearFromCart(id));
  }

  return (
    <section className="container cart">
        <div className="cart__title">Корзина</div>
        {cartList.map((item)=> {
          return <div key={item.id} className='cart-item'>
            <div className="cart-item__title">{item.name}</div>
            <div className="cart-item__count"><span className='cart-item__decr' onClick={() => handleDecrement(item)}>-</span>{item.count}<span className='cart-item__incr' onClick={() => handleIncrement(item)}>+</span></div>
            <div className="cart-item__cost">{item.cost}</div>
            <div className="cart-item__delete" onClick={() => handleClearFromCart(item.id)}>✕</div>
          </div>
        })}
    </section>
  )
}

export default CartList