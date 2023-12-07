import Image from "next/image";
import React from "react";
import "./services.scss";
export default function Services() {
  return (
    <section id="services">
      <div className="container max-w-7xl mx-auto min-h-[100vh] pt-40">
        <div className="section-title">
          <h2 className="heading text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <span>D</span>
            <span>Ị</span>
            <span>C</span>
            <span>H</span>
            <span className="space"></span>
            <span>V</span>
            <span>Ụ</span>
          </h2>
        </div>
        <div className="section-content mt-12 grid grid-cols-4 gap-4 dark:text-100 pt-40">
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 640 512"
            >
              <path
                fill="#ffa200"
                d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
              />
            </svg>
            <h3 className="text-2xl  font-semibold">Nghỉ Dưỡng Cao Cấp</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffa200"
                d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
              />
            </svg>
            <h3 className="text-2xl  font-semibold">Dịch Vụ Ăn Uống</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffa200"
                d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"
              />
            </svg>
            <h3 className="text-2xl  font-semibold">Chính Sách An Toàn</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffa200"
                d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"
              />
            </svg>
            <h3 className="text-2xl  font-semibold">Rộng Khắp Thế Giới</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
        </div>
        <div className="section-content mt-12 grid grid-cols-2 gap-2 dark:text-100">
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 576 512"
            >
              <path
                fill="#ffa200"
                d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
              />
            </svg>
            <h3 className="text-2xl  font-semibold">Tốc Độ Cao</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffa200"
                d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z"
              />
            </svg>
            <h3 className="text-2xl  font-semibold">Những Cuộc Phiêu Lưu</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
