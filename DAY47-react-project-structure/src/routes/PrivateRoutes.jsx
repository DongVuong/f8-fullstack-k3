import DefaultLayout from "../layouts/DefaultLayout";
import { Route } from "react-router-dom";
import Profile from "../pages/Auth/Profile";
import AuthMiddleWares from "../middleWares/AuthMiddleWares";
export const privateRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route element={<AuthMiddleWares />}>
        <Route path="/profile" element={<Profile />}></Route>
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
