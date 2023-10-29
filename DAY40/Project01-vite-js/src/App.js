import { router } from "./Utils/Router";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Products } from "./Pages/Products";
import { ProductDetail } from "./Pages/ProductDetail";
import { DefaultLayout } from "./Layouts/Default";
import "./Assets/style.scss";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
export const App = () => {
  return router(
    [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/products",
        component: Products,
      },
      {
        path: "/product/:id",
        component: ProductDetail,
      },
    ],
    DefaultLayout
  );
};
