import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AuthMiddlewares() {
  const isLogin = useSelector((state) => state.todo.isLogin);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthMiddlewares;
