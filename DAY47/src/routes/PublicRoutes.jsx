import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import { Route } from "react-router-dom";
import GuestMiddleware from "../middlewares/GuestMiddlewares";
export const publicRoutes = (
  <>
    <Route element={<GuestMiddleware />}>
      <Route path="/login" element={<Login />} />
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
