import React from "react";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      <h1>Header</h1>
      <main>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </div>
  );
}

export default DefaultLayout;
