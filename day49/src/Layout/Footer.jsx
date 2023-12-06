"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-100 text-dark-100 mt-4">
      <div className="container max-w-7xl mx-auto">
        <div className=" pt-10 pb-6 flex gap-x-3">
          <div className="flex-1 flex flex-col justify-start gap-y-4">
            <h3 className="text-2xl font-bold">Stravel</h3>
            <p>
              Trải Qua 17 Năm Phát Triển Bền Vững, STravel Đã Ghi Dấu Ấn Của
              Mình Với Thông Điệp <br /> “Nâng Tầm Trải Nghiệm Từng Chuyến Đi”
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-start gap-y-4">
            <h3 className="text-2xl font-bold">Chi Nhánh Chính</h3>
            <ul className="flex flex-col gap-y-1">
              <li>
                <a href="#" className=" hover:text-100">
                  Hà Nội
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Ấn Độ
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Mỹ
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Nhật Bản
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Pháp
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col justify-start gap-y-4">
            <h3 className="text-2xl font-bold">Chuyển Hướng</h3>
            <ul className="flex flex-col gap-y-1">
              <li>
                <a href="#" className=" hover:text-100">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Đặt Lịch
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Ưu Đãi
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Thư Viện
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Đánh Giá
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col justify-start gap-y-4">
            <h3 className="text-2xl font-bold">Tương Tác</h3>
            <ul className="flex flex-col gap-y-1">
              <li>
                <a href="#" className=" hover:text-100">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-100">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="py-5 text-center text-xl">
          <p>
            Created By <span className="text-100">STRAVEL</span> | All Rights
            Reserved!
          </p>
        </div>
      </div>
    </footer>
  );
}
