import { useState } from "react";
import data from "./data.json";
import "./App.css";
import Products from "./components/Products.js";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

function App() {
  const [products, setproducts] = useState(data.product);
  const [size, setsize] = useState("");
  const [sort, setsort] = useState("");
  const [filterProduct, setfilterProduct] = useState("");
  const [sortProduct, setsortProduct] = useState("");
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (product) => {
    setcartItems((cartItems) => cartItems.slice());
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setcartItems((cartItems) => cartItems.slice());
  };
  const RemoveFromCart = (product) => {
    setcartItems((cartItems) => cartItems.slice());
   setcartItems(cartItems.filter((x) => x.id !== product.id));
   console.log("cart items are")
   console.log(cartItems)
  };
  const sortProducts = (e) => {
    setsort(e.target.value);
    console.log(e.target.value);
    setsortProduct(sort);
    setproducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price > b.price
              ? 1
              : 1
            : a.id < b.id
            ? 1
            : 1
        )
    );
  };
  const filterProducts = (e) => {
    console.log(e.target.value);
    if (e.target.value === "" || e.target.value === "ALL") {
      setsize(e.target.value);
      setproducts(data.product);
    } else {
      setsize(e.target.value);
      console.log("products are" + products.size);
      setproducts(
        data.product.filter(
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
            <Products product={products} addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} RemoveFromCart={RemoveFromCart} />
          </div>
        </div>
      </main>
      <footer>All rights are reserved</footer>
    </div>
  );
}

export default App;
