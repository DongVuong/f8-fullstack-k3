import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/product/Product";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Error from "./helper/Error";
import Navbar from "./components/navbar/Navbar";
import ProductDetail from "./components/productDetails/ProductDetail";
import ScrollToTop from "./helper/ScrollToTop";
import Pagination from "./components/pagination/Pagination";
import { useSelector } from "react-redux";
import Loading from "./helper/Loading";
function App() {
  const status = useSelector((state) => state.product.status);
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={200} />
      <ScrollToTop />
      {status === "pending" && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />}>
          <Route path="product" element={<Product />}>
            <Route path=":page" element={<Product />} />
          </Route>
        </Route>
        <Route path="/details">
          <Route path=":slug/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
