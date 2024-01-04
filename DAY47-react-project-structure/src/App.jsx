import { useState } from "react";
import { publicRoutes } from "./routes/PublicRoutes";
import { Route, Routes } from "react-router-dom";
import RenderLayout from "./core/RenderLayout";

function App() {
  console.log(import.meta.env.VITE_SERVER_API);
  return <RenderLayout />;
}

export default App;
