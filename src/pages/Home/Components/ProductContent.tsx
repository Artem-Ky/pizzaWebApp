import ProductCategoryBlock from './ProductCategoryBlock';
import './Product.css'
import { IMenuFetchData } from '../../../types';
import { ProductSlice } from '../../../stores/RTKQuery/product';

const ProductContent = () => {


const {data: productList, isLoading: productListLoading, error: productListError} = ProductSlice.useFetchAllMainMenuQuery();

  if(productListLoading)
  {
    return <div className="Loading">
      <div className="Loading__gif"></div>
      <p>Ищем что вам предложить...</p>
      </div>
  }
  if(productListError)
  {
    return( <div className="Error">
      <p>Упс, что-то пошло не так...</p>
      <p>наши специалисты уже работают над ошибкой</p>
    </div>
  )}


  return (
    <div className="product__container">
          {productList?.map((item:IMenuFetchData) => {
      return <ProductCategoryBlock key={item.id} id={item.id} categoryName={item.type} cartList={item.productListDTOs}/>
    })}
    </div>

  );
}

export default ProductContent