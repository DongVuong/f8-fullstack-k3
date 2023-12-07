import Image from "next/image";
import React from "react";
import "./services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <h3 className="text-3xl font-bold">Nghỉ Dưỡng Cao Cấp</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <h3 className="text-3xl font-bold">Dịch Vụ Ăn Uống</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <h3 className="text-3xl font-bold">Chính Sách An Toàn</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <h3 className="text-3xl font-bold">Rộng Khắp Thế Giới</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <h3 className="text-3xl font-bold">Tốc Độ Cao</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          <div className="text-center hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] rounded-lg">
            <h3 className="text-3xl font-bold">Những Cuộc Phiêu Lưu</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
