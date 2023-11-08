import React from "react";
import Products from "./Products";
import Carts from "./Carts";

export default function Todo() {
  return (
    <main className="flex items-center justify-center p-8">
      <div className="container bg-slate-700 p-4 flex flex-col justify-center items-center">
        <h1 className="font-bold text-white">Welcome to Shop!</h1>
        <Products />
        <Carts />
      </div>
    </main>
  );
}
