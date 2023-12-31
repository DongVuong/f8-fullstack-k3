"use client";
import React from "react";
// import { flows } from "../../services/flowQuerry";
import AddBtn from "./AddBtn";
// import List from "./List";

function MindMap({ session }) {
  //   console.log(session);
  const email = session.user.email;
  //   const [postMindMap, resultPostMindMap] = flows.usePostMindMapMutation();
  return (
    <>
      <div className="container px-4 mx-auto">
        <div className="text-start">
          <h1 className="text-3xl md:text-4xl font-medium my-2">
            Mindmap của tôi
          </h1>
          <AddBtn email={email} />
          {/* data={data} */}
          <div className="py-4">
            <div className="flex items-center py-2">
              <span className="w-1/6 text-center">
                <input type="checkbox" />
              </span>
              <span className="w-1/2">
                <span className="text-xs uppercase text-gray-600 font-bold">
                  Tên
                </span>
              </span>
              <span className="w-1/4">
                <span className="text-xs uppercase text-gray-600 font-bold">
                  Tạo lúc
                </span>
              </span>
              <span className="w-1/4">
                <span className="text-xs uppercase text-gray-600 font-bold">
                  Hành động
                </span>
              </span>
            </div>
          </div>
          {/* <List data={data} /> */}
        </div>
      </div>
    </>
  );
}

export default MindMap;
