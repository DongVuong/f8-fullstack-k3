import Image from "next/image";
import React from "react";
import "./services.scss";
export default async function Services() {
  return (
    <section id="services">
      <div className="container max-w-7xl mx-auto min-h-[100vh] pt-[85px]">
        <div className="section-title">
          <h2 className="heading text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <span>D</span>
            <span>Ị</span>
            <span>C</span>
            <span>H</span>
            <span class="space"></span>
            <span>V</span>
            <span>Ụ</span>
          </h2>
        </div>
        <div className="section-content mt-12 grid grid-cols-4 gap-4 dark:text-100">
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="150"
              width="150"
              viewBox="0 0 640 512"
            >
              <path
                fill="orange"
                d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
              />
            </svg>
            <h3 className="text-3xl font-bold">Nghỉ Dưỡng Cao Cấp</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
