import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";
import Errors from "./pages/Errors";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Auth from "./pages/auth/Auth";
import AuthIndex from "./pages/auth/AuthIndex";
import ProductDetail from "./pages/ProductDetail";
import Orders from "./pages/orders/Orders";
import OrdersComplete from "./pages/orders/OrdersComplete";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import ScrollToTop from "./components/ScrollToTop";
const LayzyAbout = React.lazy(() => import("./pages/About"));
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/gioi-thieu"
              element={
                <React.Suspense fallback={<p>Loading..</p>}>
                  <LayzyAbout />
                </React.Suspense>
              }
            ></Route>
            <Route path="/san-pham">
              <Route index element={<Products />} />
              <Route path=":slug/:id" element={<ProductDetail />} />
            </Route>
            <Route path="/dat-hang" element={<Checkout />}></Route>
            <Route path="/cam-on" element={<Thankyou />}></Route>
            <Route path="*" element={<Errors />}></Route>
            <Route path="/auth" element={<Auth />}>
              {/* <Route index element={<AuthIndex />} /> */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/orders" element={<AuthMiddleware />}>
              <Route index element={<Orders />} />
              <Route path="completed" element={<OrdersComplete />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
