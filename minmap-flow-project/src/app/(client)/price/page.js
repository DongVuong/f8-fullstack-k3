import React from "react";
import Image from "next/image";
import price1 from "../../../assets/images/price1.jpeg";
import price2 from "../../../assets/images/price2.jpeg";
import price3 from "../../../assets/images/price3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const generateMetadata = () => {
  return {
    title: `Bảng giá - Mind Map Flow`,
  };
};
function Price() {
  return (
    <div className="max-w-6xl mx-auto pt-10 pb-36 px-8">
      <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">Flexible</span> Plans
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Choose a plan that works best for you and your team.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <Image
              className="rounded-3xl w-20 h-20"
              src={price1}
              alt="price1"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Basic</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $ 
                </span>
                <span className="text-3xl font-bold">10 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <span className="ml-3">
                {/* <FontAwesomeIcon
                  icon="fa-solid fa-check"
                  style={{ color: "#151414" }}
                /> */}
                <svg
                  className=" inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#151414"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                Get started with <span className="text-black">messaging</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <span className="ml-3">
                <svg
                  className=" inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#151414"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                Flexible <span className="text-black">team meetings</span>
              </span>
            </li>
            <li className="flex text-lg">
              <span className="ml-3">
                <svg
                  className=" inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#151414"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                <span className="text-black">5 TB</span> cloud storage
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
          </a>
        </div>
        <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <Image
              className="rounded-3xl w-20 h-20"
              src={price2}
              alt="price2"
            />
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-white">
                Startup
              </span>
              <span>
                <span className="font-medium text-xl align-top">$ </span>
                <span className="text-3xl font-bold text-white">24 </span>
              </span>
              <span className="font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
            <li className="flex mb-6">
              <span className="ml-3">
                <svg
                  className=" inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                All features in <span className="text-white">Basic</span>
              </span>
            </li>
            <li className="flex mb-6">
              <span className="ml-3">
                <svg
                  className=" inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                Flexible <span className="text-white">call scheduling</span>
              </span>
            </li>
            <li className="flex">
              <span className="ml-3">
                <svg
                  className=" inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                <span className="text-white">15 TB</span> cloud storage
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
          >
            Choose Plan
          </a>
        </div>
        <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <Image
              className="rounded-3xl w-20 h-20"
              src={price3}
              alt="price3"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Enterprise</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $ 
                </span>
                <span className="text-3xl font-bold">35 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <span className="ml-3">
                <svg
                  className=" inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#151414"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>{" "}
                All features in <span className="text-black">Startup</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <span className="ml-3">
                <svg
                  className=" inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#151414"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>{" "}
                Growth <span className="text-black">oriented</span>
              </span>
            </li>
            <li className="flex text-lg">
              <span className="ml-3">
                <svg
                  className=" inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#151414"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                <span className="text-black">Unlimited</span> cloud storage
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
          </a>
        </div>
      </div>
    </div>
  );
}

export default Price;
