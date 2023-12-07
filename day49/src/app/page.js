import React from "react";
import Home from "../pages/Home";
import Book from "../pages/Book";
import Promo from "../pages/Promo";
import Packages from "../pages/Packages";
import Services from "../pages/Services";
import Gallery from "@/pages/Gallery";
import Review from "@/pages/Reviews";

function Page() {
  return (
    <main>
      <Home />
      <Book />
      <Promo />
      <Packages />
      <Services />
      <Gallery />
      <Review />
    </main>
  );
}

export default Page;
