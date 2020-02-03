import React from "react"

import { ProductWrapper, ImgStyled } from "./Product.styles"

const Product = ({ product: { name, price, ingredients, img } }) => {
  return (
    <ProductWrapper>
      <ImgStyled fixed={img.fixed} />
      <div>
        <div>
          <h3>{name}</h3>
          <h3>${price}</h3>
        </div>
        <p>{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}

export default Product
