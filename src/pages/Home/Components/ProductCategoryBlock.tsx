import React from "react"
import { IProduct, IProductCategoryBlock } from "../../../types"
import ProductCart from "./ProductCart"






const ProductCategoryBlock: React.FC<IProductCategoryBlock> = ({categoryName, cartList, id}) => {
  return (
    <article className="category">
        <h2 id={`category-${id}`} className="category__title">{categoryName}</h2>
        <div className="category__items">
            {cartList.map((item: IProduct) => {
            return <ProductCart key={item.id} img={item.photo} title={item.name} cost={item.cost} descr={item.descr}/>
            })}
        </div>
    </article>
  )
}

export default ProductCategoryBlock