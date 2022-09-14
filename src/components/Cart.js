import React from "react";
import formatCurrency from "../utils";

const Cart = ({ cartItems, RemoveFromCart }) => {
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
          {(cartItems !==null || cartItems!=undefined) &&formatCurrency(
            cartItems.reduce((a, c) => a + c.price * c.count, 0)
          )
          }
          
          <button className="button btn-primary">
              Proceed
          </button>
          </div>
      </div>
    </>
  );
};

export default Cart;
