import { Navigate, Outlet } from "react-router-dom";
const isLogin = true;

function GuestMiddleware() {
  return !isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default GuestMiddleware;
