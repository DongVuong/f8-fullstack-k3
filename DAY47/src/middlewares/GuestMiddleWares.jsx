import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function GuestMiddleware() {
  const isLogin = useSelector((state) => state.todo.isLogin);
  return !isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default GuestMiddleware;
