import Book from "@/pages/Book";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Home from "@/pages/Home";
import Packages from "@/pages/Packages";
import Promo from "@/pages/Promo";
import Review from "@/pages/Reviews";
import Services from "@/pages/Services";
import React from "react";

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
      <Contact />
    </main>
  );
}

export default Page;
