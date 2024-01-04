import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./mumbai.scss";
export default function Mumbai({ listPage }) {
  return (
    <section id="mumbai">
      <div className="min-h-[100vh] pt-[85px] container max-w-7xl mx-auto">
        <div className="section-title">
          <h2 className="heading text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <span>M</span>
            <span>U</span>
            <span>M</span>
            <span>B</span>
            <span>A</span>
            <span>I</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5 pb-5">
          {listPage &&
            listPage[2].galleryBox.map(({ src, id }) => (
              <div className="p-2 bg-[#fff] rounded-md shadow-lg" key={id}>
                <div className="relative group overflow-hidden h-[250px]">
                  <div className="px-3 z-10 absolute group-hover:translate-y-[100%] transition-transform bg-[rgba(0,0,0,0.7)] inset-x-0 h-[100%] top-[-100%] flex flex-col gap-4 justify-center items-center">
                    <h4 className="text-orange-500 text-2xl font-semibold">
                      Tổng hợp
                    </h4>
                    <p className="text-center text-white">
                      Tổng Hợp Những Bức Ảnh Đẹp Nhất Của Mumbai
                    </p>
                    <Link
                      href={"/"}
                      className="  text-white bg-orange-500 py-2 px-4 text-xl rounded-md"
                    >
                      Trang Chủ
                    </Link>
                  </div>
                  <Image
                    src={`https://api-pages.vercel.app/${src}`}
                    className="w-full h-full z-0"
                    alt="gallery"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
