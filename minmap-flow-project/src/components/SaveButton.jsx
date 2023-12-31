"use client";
import React from "react";
import { client } from "../services/client";
function SaveButton() {
  const handleClick = () => {
    // console.log(JSON.parse(localStorage.getItem("data")));
    const { response, data } = client.post("/posts", {
      title: "Mindmap không có tên",
      Description: "Chưa có mô tả",
      data: JSON.parse(localStorage.getItem("data")),
    });
  };
  return (
    <button
      onClick={handleClick}
      className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700"
      target="_blank"
      rel="noopener"
    >
      <i className="fa-solid fa-save"></i>
      <span className="ml-2">Lưu thay đổi</span>
    </button>
  );
}

export default SaveButton;
