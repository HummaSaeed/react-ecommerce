import React from "react";
import formatCurrency from "../utils";

const Products = ({ Product }) => {
  return (
    <div>
      <ul className="products">
        {Product.map((Product) => (
          <li kye={Product.id}>
            <div className="product">
              <a href="#">
                <img src={Product.thumbnail} alt="" />
                <p>{Product.title}</p>
              </a>
            </div>
            <div className="product-price">{formatCurrency(Product.price)}</div>
            <button className="button primary">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
