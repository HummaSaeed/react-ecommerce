import React from "react";

const Filter = ({ count,sort,size,sortProduct,filterProduct }) => {
  return (
    <div className="filter">
      <div className="filter-result">{count} Products </div>
      <div className="filter-sort">
        Order{" "}
        <select value={sort} onChange={sortProduct}>
          <option value="Latest">Latest</option>
          <option value="lowest">lowest</option>
          <option value="highest">highest</option>
        </select>
      </div>
      <div className="fiter-size">
        Filter {""}
        <select value={size} onChange={filterProduct}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">X</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
