import { removeAccents } from "../../helper/regex";
import React from "react";
import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../helper/formatCurrentcy";
import Pagination from "../pagination/pagination";
import { productSlice } from "../../redux/slice/productSlice";
import Navbar from "../navbar/Navbar";
const { addCart } = productSlice.actions;
function Product() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const status = useSelector((state) => state.product.status);
  const handleAdd = (product) => {
    const productCart = {
      _id: product._id,
      category: product.category,
      name: product.name,
      brand: product.brand,
      image: product.image,
      price: product.price,
      amount: product.quantity,
      quantity: 1,
      updatedAt: product.updatedAt,
    };

    dispatch(addCart(productCart));
  };

  return (
    <>
      <Navbar />
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title">PRODUCTS</h2>
            </div>
          </div>
        </div>
        <div className="container product-list ">
          {productList.map((product) => (
            <div className="product-item" key={product._id}>
              <Link
                to={`/details/name~${removeAccents(product.name)}/${
                  product._id
                }`}
              ></Link>
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h4 className="name-product">{product.name}</h4>
              <div className="info">
                <span className="price">{formatCurrency(product.price)}</span>
                <button className="cart" onClick={() => handleAdd(product)}>
                  <i className="fi fi-rr-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination />
    </>
  );
}

export default Product;
