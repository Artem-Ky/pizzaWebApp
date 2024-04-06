import { useSelector } from 'react-redux'
import { RootState } from '../../../stores/store'
import ProductCategoryBlock from './ProductCategoryBlock';
import { useEffect } from "react";
import { getMenuList } from '../../../stores/slices/productSlice';
import './Product.css'
import { useAppDispatch } from '../../../customHooks/redux/redux';
import { IMenuFetchData } from '../../../types';

const ProductContent = () => {
  const dispatch = useAppDispatch();
const {items, status} = useSelector((state: RootState) => state.product)
useEffect(() => {
  dispatch(getMenuList());
}, []);


  if(status == 'isLoading')
  {
    return <div className="Loading">
      <div className="Loading__gif"></div>
      <p>Ищем что вам предложить...</p>
      </div>
  }
  if(status == 'reject')
  {
    return( <div className="Error">
      <p>Упс, что-то пошло не так...</p>
      <p>наши специалисты уже работают над ошибкой</p>
    </div>
  )}


  return (
    <div className="product__container">
          {items.map((item:IMenuFetchData) => {
      return <ProductCategoryBlock key={item.id} id={item.id} categoryName={item.type} cartList={item.productListDTOs}/>
    })}
    </div>

  );
}

export default ProductContent