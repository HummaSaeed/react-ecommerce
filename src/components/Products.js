import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import formatCurrency from "../utils";

const Products = ({ product, addToCart }) => {
  const [showModal, setshowModal] = useState(false);
  const [modalproducts, setmodalproducts] = useState();
  const openModal = (product) => {
    setshowModal(true);
    setmodalproducts(product)
  };
  const hideModal =() =>{
    setshowModal(false);
  }
  return (
    <>
      <div>
        <ul className="products">
          {product.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a
                  href={"#" + product.id}
                  onClick={() => {
                    openModal(product);
                  }}
                >
                  <img src={product.thumbnail} alt="" />
                  <p>{product.title}</p>
                </a>
              </div>
              <div className="product-price">
                {formatCurrency(product.price)}
              </div>
              <button
                className="button primary"
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      {showModal ? (
        <div>
          {" "}
          <Modal
            show={showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
              <div className="product-details">
              <img src={modalproducts.thumbnail} alt="Image"/>
              <div className="product-details-description">
                <p><strong>{modalproducts.title}</strong></p>
                <p>{modalproducts.description}</p>
                <div>{modalproducts.size.map((item) =>(<button className="btn-primary">{item}</button>))}</div>
                <p>{formatCurrency(modalproducts.price)}</p>
                <button onClick={()=>{addToCart(modalproducts)}}>Add to Cart</button>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={()=>{hideModal()}}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Products;
