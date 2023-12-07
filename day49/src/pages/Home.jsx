"use client";

import { useState } from "react";

export default function Home() {
  const [video, setVideo] = useState(1);
  return (
    <section
      id="home"
      className="relative h-[100vh] w-full flex justify-center items-center flex-col gap-y-12 min-h-[100vh]"
    >
      <div className=" text-2xl text-white text-center flex flex-col gap-y-4 z-10">
        <h1 className="text-5xl font-bold transition-colors">
          Mọi chuyến đi đều đáng giá
        </h1>
        <p>Khám phá các vùng đất mới cùng chúng tôi</p>
        <p>Những chuyến đi đang chờ đợi bạn</p>
        <a
          href="#"
          className=" bg-orange-500 w-fit mx-auto py-2 px-5 text-xl rounded-3xl"
        >
          Khám phá ngay
        </a>
      </div>
      <div className=" rounded-full p-4 flex gap-x-3 z-10">
        <span
          className={`w-[20px] h-[20px] bg-[#fff] inline-block rounded-full${
            video === 1 ? " bg-yellow-500" : ""
          }`}
          onClick={() => setVideo(1)}
        ></span>
        <span
          className={`w-[20px] h-[20px] bg-[#fff] inline-block rounded-full${
            video === 2 ? " bg-yellow-500" : ""
          }`}
          onClick={() => setVideo(2)}
        ></span>
        <span
          className={`w-[20px] h-[20px] bg-[#fff] inline-block rounded-full${
            video === 3 ? " bg-yellow-500" : ""
          }`}
          onClick={() => setVideo(3)}
        ></span>
      </div>
      <div className=" absolute inset-0 overflow-hidden">
        <video
          src={`https://code-fullstack-exercise49.vercel.app/videos/vid-${video}.mp4`}
          loop
          autoPlay
          muted
          className="w-full"
        ></video>
      </div>
    </section>
  );
}
