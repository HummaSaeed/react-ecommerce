import { useState } from "react";
import data from "./data.json";
import "./App.css";
import Products from "./components/Products.js";
import Filter from "./components/Filter";

function App() {
  console.log(data.products);
  const [products, setproducts] = useState(data.products);
  const [size, setsize] = useState("");
  const [sort, setsort] = useState("");
  const [filterProduct, setfilterProduct] = useState("");
  const [sortProduct, setsortProduct] = useState("");
  const sortProducts = (e) => {
    console.log(e.target.value);
  };
  const filterProducts = (e) => {
    console.log(e.target.value);
    if (e.target.value === "" || e.target.value==="ALL") {
      setsize(e.target.value);
      setproducts(data.products);
    } else {
      setsize(e.target.value);
      console.log("products are"+products.size)
      setproducts(
        data.products.filter(
          (product) => product.size.indexOf(e.target.value) >= 0
        )
      );
    }
  };
  return (
    <div className="grid-container">
      <header>
        <a href="">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProduct={filterProducts}
              sortProduct={sortProducts}
            />
            <Products Product={products} />
          </div>
          <div className="sidebar">Card Items</div>
        </div>
      </main>
      <footer>All rights are reserved</footer>
    </div>
  );
}

export default App;
