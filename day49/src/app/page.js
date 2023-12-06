import React from "react";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Promo from "./pages/Promo";
import Packages from "./pages/Packages";
import Services from "./pages/Services";

function Page() {
  return (
    <main>
      <Home />
      <Book />
      <Promo />
      <Packages />
      <Services />
    </main>
  );
}

export default Page;
