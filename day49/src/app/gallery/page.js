import React from "react";
import Egypt from "@/pages/gallery/Egypt";
import Hawaii from "@/pages/gallery/Hawaii";
import HomeGallery from "@/pages/gallery/Home";
import Mumbai from "@/pages/gallery/Mumbai";
import Paris from "@/pages/gallery/Paris";
import Sydney from "@/pages/gallery/Sydney";
import Tokyo from "@/pages/gallery/Tokyo";
const getPages = async () => {
  const response = await fetch(`https://api-pages.vercel.app/api/v1/pages`);
  return response.json();
};
export default async function GalleryRoute() {
  const listPage = await getPages();
  return (
    <main>
      <HomeGallery listPage={listPage} />
      <Hawaii listPage={listPage} />
      <Mumbai listPage={listPage} />
      <Paris listPage={listPage} />
      <Sydney listPage={listPage} />
      <Tokyo listPage={listPage} />
      <Egypt listPage={listPage} />
    </main>
  );
}
