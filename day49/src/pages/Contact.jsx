"use client";
import React from "react";
import "./contact.scss";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact">
      <div className="container max-w-7xl mx-auto min-h-[100vh] flex justify-center items-center flex-col gap-y-8">
        <div className="section-title text-center">
          <h2 className="heading text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <span>L</span>
            <span>I</span>
            <span>Ê</span>
            <span>N</span>
            <span className="space"></span>
            <span>H</span>
            <span>Ệ</span>
          </h2>
        </div>

        <div className="flex gap-8 mt-5 w-full">
          <iframe
            className="flex-1"
            width="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4064000497674!2d105.78126121547308!3d20.976340386026827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2d89877d7%3A0xe55435164e9b4695!2zMTk3IFRy4bqnbiBQaMO6LCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1650976801748!5m2!1svi!2s"
            frameBorder="0"
          />

          <form
            onSubmit={handleSubmit}
            className="flex-[1_0_180px] bg-[#fff] rounded-lg shadow-lg dark:bg-dark-300 px-5 py-7 flex flex-col gap-y-4"
          >
            <div className="flex gap-x-5">
              <input
                className="flex-1 border-2 border-yellow p-2 outline-none"
                type="text"
                name="name"
                placeholder="Tên của bạn"
              />
              <input
                className="flex-1 border-2 border-yellow p-2 outline-none"
                type="email"
                name="email"
                placeholder="Email liên hệ"
              />
            </div>
            <div className="flex gap-x-5">
              <input
                type="number"
                name="number-phone"
                placeholder="Số điện thoại"
                className="flex-1 border-2 border-yellow p-2 outline-none"
              />
              <input
                type="text"
                name="theme"
                placeholder="Chủ đề"
                className="flex-1 border-2 border-yellow p-2 outline-none"
              />
            </div>
            <div>
              <textarea
                className=" resize-none w-full border-2 h-[150px] border-yellow p-2 outline-none "
                name="message"
                placeholder="Viết lời nhắn của bạn"
              ></textarea>
            </div>
            <button className="bg-yellow-500 w-full py-2 mt-3 text-lg">
              Gửi tới chúng tôi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
