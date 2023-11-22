import React from "react";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
const { deleteProduct, payProduct, decreaseProduct, increaseProduct } =
  productSlice.actions;
import { productSlice } from "../../redux/slice/productSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.product.cartList);
  const totalCart = cartList.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  const handlePay = () => {
    dispatch(payProduct());
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };
  return (
    <>
      <div className="cart-shopping">
        <div className="title">
          <h1>SHOPPING CART</h1>
        </div>
        {cartList.map((item) => (
          <div className="single-product" key={item._id}>
            <div className="info-single-product">
              <div className="image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="details">
                <div>
                  <span style={{ marginRight: 10, color: "rgb(157, 23, 77)" }}>
                    {item.brand}
                  </span>
                  <span>{item.name}</span>
                </div>
                <p className="price">
                  <span>$</span>
                  {item.price}
                </p>
                <p>Còn lại: {item.amount}</p>
              </div>
            </div>
            <div className="footer">
              <div className="edit">
                <button
                  className="decrement"
                  onClick={() =>
                    item.quantity === 1
                      ? dispatch(deleteProduct(item))
                      : dispatch(decreaseProduct(item._id))
                  }
                >
                  <span> -</span>
                </button>
                <div className="quantity">{item.quantity}</div>
                <button
                  className="increment"
                  onClick={() => dispatch(increaseProduct(item._id))}
                >
                  <span>+</span>
                </button>
              </div>
              <div className="total">
                <div className="total-price">
                  <span>$</span>
                  {item.price * item.quantity}
                </div>
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(deleteProduct(item))}
                >
                  <i className="fi fi-rs-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
        <h2 style={{ fontSize: "2rem" }}>
          Total Price: <span style={{ color: "#9d174d" }}>$</span>
          {totalCart}
        </h2>
        <div className="button-list">
          <button className="home" onClick={() => navigate(-1)}>
            Go home
          </button>
          <button className="pay" onClick={handlePay}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
