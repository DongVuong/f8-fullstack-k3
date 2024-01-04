import React from "react";
import { publicRoutes } from "../routes/PublicRoutes";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "../routes/PrivateRoutes";

function RenderLayout() {
  const Layout = publicRoutes.layout;
  return (
    <Routes>
      {publicRoutes}
      {privateRoutes}
    </Routes>
  );
}

export default RenderLayout;

// <Routes>
// <Route path="/" element={<Layout />}>
//   {publicRoutes.routes.map(({ path, element }, index) => {
//     const Component = element;
//     return <Route key={index} path={path} element={<Component />} />;
//   })}
// </Route>
// </Routes>
