import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export const generateMetadata = () => {
  return {
    title: `Tính năng chính - Mind Map Flow`,
  };
};

function Features() {
  return (
    <div className="feature-1 py-6 md:py-12">
      <div className="container px-4 mx-auto">
        <div className="flex -mx-4">
          <div className="px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
            <h1 className="mb-4 text-4xl font-medium">Features</h1>
            <p className="mb-4 text-xl">
              The main aim of creating FWR blocks is to help designers,
              developers and agencies create websites and web apps quickly and
              easily. Each and every block uses minimal custom styling and is
              based on the utility first Tailwind framework.
            </p>
            <button className="border-2 border-solid border-indigo-600 rounded py-2 px-12 text-xl text-indigo-600 hover:bg-indigo-600 hover:text-white mt-4 transition-color duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:flex md:-mx-4 mt-12 md:pt-4">
          <div className="px-4 md:w-1/3 mt-6 md:mt-0">
            <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
              <div className="text-xl p-4 w-16 h-16 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 448 512"
                >
                  <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                </svg>
              </div>
              <h5 className="text-xl font-medium mb-4">Fresh Design</h5>
              <p className="text-gray-600 mb-3">
                FWR blocks bring in an air of fresh design with their creative
                layouts and blocks, which are easily customizable.
              </p>
            </div>
          </div>
          <div className="px-4 md:w-1/3 mt-6 md:mt-0">
            <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
              <div className="text-xl p-4 w-16 h-16 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 640 512"
                >
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
                {/* <i className="fas fa-code text-indigo-600"></i> */}
              </div>
              <h5 className="text-xl font-medium mb-4">Clean Code</h5>
              <p className="text-gray-600 mb-3">
                FWR blocks are the cleanest pieces of HTML blocks, which are
                built with utmost care to quality and usability.
              </p>
            </div>
          </div>
          <div className="px-4 md:w-1/3 mt-6 md:mt-0">
            <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
              <div className="text-xl p-4 w-16 h-16 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>
                {/* <i className="fas fa-wrench text-indigo-600"></i> */}
              </div>
              <h5 className="text-xl font-medium mb-4">Perfect Tool</h5>
              <p className="text-gray-600 mb-3">
                FWR blocks is a perfect tool for designers, developers and
                agencies looking to create stunning websites in no time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
