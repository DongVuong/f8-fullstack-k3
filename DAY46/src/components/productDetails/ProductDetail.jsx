import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/slice/productSlice";
import "./productdetail.scss";
import { productSlice } from "../../redux/slice/productSlice";
const { addCart } = productSlice.actions;

function ProductDetail() {
  const productDetail = useSelector((state) => state.product.productDetails);
  const status = useSelector((state) => state.product.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
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
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);
  return (
    <div className="info-product">
      <div className="image">
        <img src={productDetail.image} alt={productDetail.name} />
      </div>
      <div className="info">
        <div className="brand">
          <span>Thương Hiệu:</span>
          {productDetail.brand}
        </div>
        <div className="name">
          <span>Tên sản phẩm:</span>
          {productDetail.name}
        </div>
        <div className="info">
          <span>Thông tin sản phẩm:</span>
          <p>{productDetail.description}</p>
        </div>
        <div className="category">
          <span>Category: </span>
          <span>{productDetail.category}</span>
        </div>
        <div className="footer">
          <div className="cost-add">
            <div className="price">
              <span>$</span>
              <span>{productDetail.price}</span>
            </div>
            <div className="button-list">
              <button className="btn-home" onClick={() => navigate(-1)}>
                Go home
              </button>
              <button
                className="btn-add"
                onClick={() => handleAdd(productDetail)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
