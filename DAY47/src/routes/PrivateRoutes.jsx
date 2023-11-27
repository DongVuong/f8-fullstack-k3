import { Route } from "react-router-dom";
import AuthMiddlewares from "../middlewares/AuthMiddlewares";
import Home from "../pages/Home/Home";
export const privateRoutes = (
  <>
    <Route element={<AuthMiddlewares />}>
      <Route path="/" element={<Home />}></Route>
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
