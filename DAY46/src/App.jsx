import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/product/Product";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { Error } from "./helper/Error";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Product />}>
          <Route path="product" element={<Product />}>
            <Route path=":page" element={<Product />} />
          </Route>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
