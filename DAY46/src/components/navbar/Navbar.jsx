import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const quantity = useSelector((state) => state.product.quantity);
  const headerInnerElRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const cartList = useSelector((state) => state.product.cartList);
  const navigate = useNavigate();

  return (
    <header>
      <div className="container-shop">
        <Link to="/">
          <div className="title">
            <h1>Welcome to Đông's shop</h1>
          </div>
        </Link>
        <div className="icon-cart">
          <Link to="/cart">
            <i className="fi fi-rr-shopping-cart"></i>
          </Link>
          <span className="quantity">{quantity}</span>
        </div>
      </div>
    </header>
  );
}
