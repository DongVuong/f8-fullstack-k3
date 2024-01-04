import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Products/Product";
import ProductDetails from "../pages/Products/ProductDetails";
import Login from "../pages/Auth/Login";
import { Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import GuestMiddleware from "../middleWares/GuestMiddleWares";
export const publicRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product">
        <Route path="" element={<Product />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
    </Route>
    <Route element={<AuthLayout />}>
      <Route element={<GuestMiddleware />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Route>
  </>
);

// {
//     layout: DefaultLayout,
//     routes: [
//       {
//         path: "/",
//         element: Home,
//       },
//       {
//         path: "/about",
//         element: About,
//       },
//       {
//         path: "/product",
//         element: Product,
//       },
//       {
//         path: "/product/:id",
//         element: ProductDetails,
//       },
//       {
//         path: "/login",
//         element: Login,
//       },
//     ],
//   };
