import React, { useEffect, useState } from "react";
import { client } from "../api/client";

export default function GetTodo({ apiKey }) {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    client.setApiKey(apiKey);
    client.get("/todos").then(({ response, data }) => {
      setTodoList(data.data.listTodo);
    });
  }, []);
  return (
    <main className="__className_6a793a flex items-center justify-center p-8">
      <div className="container bg-slate-700 p-4 flex flex-col justify-center items-center">
        <h1 className="font-bold text-white">Wellcome to App!</h1>
        <form action="" className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2 relative">
            <input
              type="text"
              name="todo"
              placeholder="Thêm một việc làm mới"
              className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-white "
              autoFocus
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-shrink-0"
            >
              Thêm mới
            </button>
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute translate-x-4 left-full w-max"
            >
              Tìm kiếm
            </button>
          </div>
        </form>
        <ul className="list-disc w-full max-w-3xl flex flex-col gap-4">
          {todoList.length === 0 ? (
            <li className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
                value="không có todo"
                readOnly
              />
            </li>
          ) : (
            todoList.map(({ todo, _id: id }) => (
              <li
                key={id}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
              >
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
                  value={todo}
                  readOnly
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}
