import React, { useState } from "react";
import formatCurrency from "../utils";

const Cart = ({newcreateOrder, cartItems, RemoveFromCart }) => {
  const [showcheckout, setshowcheckout] = useState(false);
   const [name, setname] = useState("");
   const [email, setemail] = useState("");
   const [address, setaddress] = useState("");
  const handlenameInput = (event) => {
    event.persist();
    setname(event.target.value)
  };
  const handleemailInput = (event) => {
    event.persist();
    setemail(event.target.value)
    
  };
  const handleaddressInput = (event) => {
    event.persist();
    setaddress(event.target.value)
  };
  const createOrder =(e) =>{
    e.preventDefault();
   const order ={
    name:name,
    email:email,
    address:address,
    cartItems:cartItems
   }
   newcreateOrder(order) 
  }
  console.log(cartItems.length);
  return (
    <>
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is Empty</div>
        ) : (
          <div>Your have {cartItems.length} in Cart</div>
        )}
      </div>
      <div className="cart">
        <div className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="image">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  width="30px"
                  height="30px"
                />
              </div>
              <div>
                <p>{item.title}</p>
                <div className="right">
                  {formatCurrency(item.price)} x {item.count}
                  <button
                    onClick={() => {
                      RemoveFromCart(item);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
      <div className="cart">
        <div className="total">
          Total: {""}
          {(cartItems !== null || cartItems != undefined) &&
            formatCurrency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )}
          <button
            onClick={() => {
              setshowcheckout(true);
            }}
            className="button btn-primary"
          >
            Proceed
          </button>
        </div>
      </div>
      {showcheckout === true && (
        <div className="cart">
          <form onSubmit={createOrder}>
            <ul className="cart-container">
              <li>
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  required
                  value={email}
                  onChange={handleemailInput}
                />
              </li>
              <li>
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={handlenameInput}
                />
              </li>
              <li>
                <label>Address</label>
                <input
                  name="address"
                  type="text"
                  required
                  value={address}
                  onChange={handleaddressInput}
                />
                <button type="submit" className="button primary">Checkout</button>
              </li>
            </ul>
          </form>
        </div>
      )}
    </>
  );
};

export default Cart;
