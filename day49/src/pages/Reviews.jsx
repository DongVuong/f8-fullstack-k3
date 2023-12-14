import Image from "next/image";
import React from "react";
import "./reviews.scss";
export default function Review() {
  return (
    <section id="review">
      <div className="container mx-auto max-w-7xl min-h-[100vh] pt-[85px]">
        <div className="section-title">
          <h2 className="heading text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <span>Đ</span>
            <span>Á</span>
            <span>N</span>
            <span>H</span>
            <span className="space"></span>
            <span>G</span>
            <span>I</span>
            <span>Á</span>
          </h2>
        </div>
        <div className="mt-5">
          {/* Top */}
          <div className=" shadow-md p-5 dark:bg-dark-300 flex justify-center items-center">
            {/* Left  */}
            <div className="flex-1">
              <h2 className="text-100 text-3xl font-medium text-center">
                Đánh Giá Chuyến Đi Của Bạn
              </h2>
              <span className="flex mx-auto w-fit mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#edc80c"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#edc80c"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#edc80c"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#edc80c"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#edc80c"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
              </span>
            </div>
            {/* Right  */}
            <div className="flex-[1_1_350px] bg-[#fff] transition-colors dark:bg-dark-300">
              <form className="w-full p-3 ">
                <textarea
                  className="resize-none w-full outline-none border-2 border-yellow p-3 min-h-[150px] text-xl"
                  placeholder="Viết đánh giá của bạn"
                ></textarea>
                <button className="bg-yellow-500 w-full py-2 mt-3 text-lg">
                  Gửi tới chúng tôi
                </button>
              </form>
            </div>
          </div>
          {/* down */}
          <div className="section-content mt-4 grid grid-cols-3 gap-4 dark:text-100">
            {/* Item 1 */}
            <div className="text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 transition-colors dark:bg-dark-300">
              <div className="h-[120px] w-[120px] rounded-full overflow-hidden mx-auto relative">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/pic1.png"
                  }
                  fill
                  sizes="100%"
                  alt="anh"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold mt-4">Some People</h3>
              <span className="text-light-200 mt-2 block">Some Text...</span>
            </div>
            {/* Item 2 */}
            <div className="text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 transition-colors dark:bg-dark-300">
              <div className="h-[120px] w-[120px] rounded-full overflow-hidden mx-auto relative">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/pic2.png"
                  }
                  fill
                  sizes="100%"
                  alt="anh"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold mt-4">Some People</h3>
              <span className="text-light-200 mt-2 block">Some Text...</span>
            </div>
            {/* Item 3 */}
            <div className="text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 transition-colors dark:bg-dark-300">
              <div className="h-[120px] w-[120px] rounded-full overflow-hidden mx-auto relative">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/pic3.png"
                  }
                  fill
                  sizes="100%"
                  alt="anh"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold mt-4">Some People</h3>
              <span className="text-light-200 mt-2 block">Some Text...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
