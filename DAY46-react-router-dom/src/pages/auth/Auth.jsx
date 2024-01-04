import React from "react";
import { Navigate, Outlet, useNavigate, useOutlet } from "react-router-dom";
function Auth() {
  const navigate = useNavigate();
  const outlet = useOutlet();
  return (
    <div>
      {!outlet && (
        <>
          <h1>Auth</h1>
          <button onClick={() => navigate("/auth/login")}>Login</button>
          <button onClick={() => navigate("/auth/register")}>Register</button>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default Auth;
