import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./gallery.scss";

export default function Gallery() {
  const ImgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section id="gallery">
      <div className=" h-screen pt-[50px] container max-w-7xl mx-auto">
        <div className="section-title text-center">
          <h2 className="heading text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <span>T</span>
            <span>H</span>
            <span>Ư</span>
            <span className="space"></span>
            <span>V</span>
            <span>I</span>
            <span>Ệ</span>
            <span>N</span>
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-0 mt-5 pb-5">
          {ImgArr.map((num, i) =>
            i < 5 ? (
              <div className="p-2 bg-[#fff] rounded-md shadow-lg" key={i}>
                <div className="relative group overflow-hidden h-[250px]">
                  <div className="px-3 z-10 absolute group-hover:translate-y-[100%] transition-transform bg-[rgba(0,0,0,0.7)] inset-x-0 h-[100%] top-[-100%] flex flex-col gap-4 justify-center items-center">
                    <h4 className="text-orange-500 text-2xl font-semibold">
                      Ảnh chụp
                    </h4>
                    <p className="text-center text-white">
                      Những Bức Ảnh Đẹp Nhất Về Chuyến Du Lịch Của Bạn Sẽ Được
                      Chia Sẻ Lên Đây
                    </p>
                    <Link
                      href={"/gallery"}
                      className=" text-white bg-orange-500 py-2 px-4 text-xl rounded-md"
                    >
                      Xem Thêm
                    </Link>
                  </div>
                  <Image
                    src={`https://code-fullstack-exercise49.vercel.app/images/g-${num}.jpg`}
                    className="w-full h-full z-0"
                    alt="gallery"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="grid grid-cols-4 gap-0 mt-5 pb-5">
          {ImgArr.map((num, i) =>
            i >= 5 ? (
              <div className="p-2 bg-[#fff] rounded-md shadow-lg" key={i}>
                <div className="relative group overflow-hidden h-[250px]">
                  <div className="px-3 z-10 absolute group-hover:translate-y-[100%] transition-transform bg-[rgba(0,0,0,0.7)] inset-x-0 h-[100%] top-[-100%] flex flex-col gap-4 justify-center items-center">
                    <h4 className="text-orange-500 text-2xl font-semibold">
                      Ảnh chụp
                    </h4>
                    <p className="text-center text-white">
                      Những Bức Ảnh Đẹp Nhất Về Chuyến Du Lịch Của Bạn Sẽ Được
                      Chia Sẻ Lên Đây
                    </p>
                    <Link
                      href={"/gallery"}
                      className=" text-white bg-orange-500 py-2 px-4 text-xl rounded-md"
                    >
                      Xem Thêm
                    </Link>
                  </div>
                  <Image
                    src={`https://code-fullstack-exercise49.vercel.app/images/g-${num}.jpg`}
                    className="w-full h-full z-0"
                    alt="gallery"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
}
