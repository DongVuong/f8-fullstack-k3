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
        {cartList.length !== 0 ? (
          cartList.map((item) => (
            <div className="single-product" key={item._id}>
              <div className="info-single-product">
                <div className="image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="details">
                  <div className="item-brand">
                    <span>Thương Hiệu:</span>
                    <span>{item.brand}</span>
                  </div>
                  <div className="item-name">
                    <span>Tên sản phẩm:</span>
                    <span>{item.name}</span>
                  </div>

                  <div className="price">
                    <span className="sub">Giá:</span>
                    <span className="currency">$</span>
                    {item.price}
                  </div>
                  <div className="remain">
                    <span>Còn lại:</span> {item.amount}
                  </div>
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
          ))
        ) : (
          <h2>Không có sản phẩm nào trong giỏ hàng</h2>
        )}
        {cartList.length !== 0 ? (
          <>
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
          </>
        ) : (
          <div className="button-list">
            <button className="home-alone" onClick={() => navigate(-1)}>
              Go home
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
