import React from "react";
import formatCurrency from "../utils";

const Products = ({product,addToCart }) => {
  return (
    <div>
      <ul className="products">
        {product.map((product) => (
          <li key={product.id}>
            <div className="product">
              <a href={"#"+product.id}>
                <img src={product.thumbnail} alt="" />
                <p>{product.title}</p>
              </a>
            </div>
            <div className="product-price">{formatCurrency(product.price)}</div>
            <button className="button primary" onClick ={()=>{addToCart(product)}}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
