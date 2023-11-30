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
