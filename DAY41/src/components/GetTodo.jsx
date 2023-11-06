import React, { useEffect, useState } from "react";
import { client } from "../api/client";
import { HtmlScript } from "../helper/StripHtml";
import { toast } from "react-toastify";
let isSearch = false;
let editDataInfo = {};
export default function GetTodo({ apiKey = "", setIsLoading = () => {} }) {
  let isLogin = false;
  let checkAlert = false;
  const [todoList, setTodoList] = useState([]);
  const [editData, setEditData] = useState({
    editingId: null,
    inputText: "",
  });
  const [inputValue, setInputValue] = useState("");
  // const [debouncedInputValue, setDebouncedInputValue] = useState("");
  function handleDelete(id) {
    if (window.confirm("Bạn chắc chắn muốn xoá?")) {
      setIsLoading(true);
      client.setApiKey(apiKey);
      client.delete(`/todos/${id}`).then(({ response, data }) => {
        if (response.ok) {
          setIsLoading(false);
          toast.success("Thao tác thành công");
          // window.alert("Thao tác thành công");
          client.get("/todos").then(({ response, data }) => {
            setTodoList(data.data.listTodo);
          });
        } else {
          setIsLoading(false);
          toast.error("Thao tác thất bại");
          // window.alert("Thao tác thất bại");
        }
      });
    }
  }
  const handleKeyUp = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    if (isSearch) {
      const timeoutId = setTimeout(() => {
        // setDebouncedInputValue(inputValue);
        callApi(inputValue);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [inputValue]);

  const callApi = (value) => {
    setIsLoading(true);
    client
      .get(`/todos?q=${value}`)
      .then(({ response, data }) => {
        if (response.ok) {
          setTodoList(data.data.listTodo);
        } else {
          toast.error(data.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const handleClick = (e) => {
    isLogin = sessionStorage.getItem("apiKey");
    if (!isLogin) {
      toast.warning(`Hãy đăng nhập để bắt đầu tìm kiếm!`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      return;
    }
    if (!isSearch) {
      isSearch = true;
      toast.success(`Đã sẵn sàng để tìm kiếm!`);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    isLogin = sessionStorage.getItem("apiKey");
    if (isLogin) {
      let todo = e.target.todo.value;
      if (todo) {
        setIsLoading(true);
        e.target.todo.value = "";
        client.setApiKey(apiKey);
        client
          .post("/todos", { todo })
          .then(({ response, data }) => {
            if (response.ok) {
              setIsLoading(false);
              toast.success("Thao tác thành công");
              // window.alert("Thao tác thành công");
              client.get("/todos").then(({ response, data }) => {
                setTodoList(data.data.listTodo);
              });
            } else {
              setIsLoading(false);
              toast.error("Thao tác thất bại");
              // window.alert("Thao tác thất bại");
            }
          })
          .finally(() => {
            isSearch = false;
            callApi("");
          });
      } else {
        toast.warning("Không được để trống công việc");
        // window.alert("Không được để trống công việc");
      }
    } else {
      // window.alert("Vui lòng đăng nhập để sử dụng dịch vụ");
      toast.warning("Vui lòng đăng nhập để sử dụng dịch vụ");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }
  useEffect(() => {
    if (apiKey) {
      client.setApiKey(apiKey);
      setIsLoading(true);
      client
        .get("/todos")
        .then(({ response, data }) => {
          if (response.ok) {
            setTodoList(data.data.listTodo);
          } else {
            setIsLoading(true);
            toast.error("Mất kết nối, vui lòng đăng nhập lại");
            // window.alert("Mất kết nối, vui lòng đăng nhập lại");
            sessionStorage.clear();
            window.location.reload();
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [apiKey]);
  function handleEdit(id, todo, isCompleted) {
    editDataInfo = {
      id,
      todo,
      isCompleted,
    };
    setEditData({
      editingId: id,
      inputText: todo,
    });
    console.log(editDataInfo);
  }
  const handleUpdateClick = (id, e) => {
    const body = todoList.find((item) => {
      return id === item._id;
    });
    setIsLoading(true);
    client.setApiKey(apiKey);
    client
      .patch(`/todos/${id}`, {
        todo: editData.inputText,
        isCompleted: body.isCompleted,
      })
      .then(({ response, data }) => {
        setIsLoading(false);
        if (response.status === 401) {
          this.reloadPage();
        } else if (response.ok) {
          setTodoList(
            todoList.map((item) =>
              item._id === id ? { ...item, todo: editData.inputText } : item
            )
          );
          setEditData({
            editingId: null,
          });
          toast.success(`${data.message}`);
          // window.alert(`${data.message}`);
        } else {
          handleCannelClick();
          toast.error("Đã xảy ra lỗi, hãy thử lại!");
          // window.alert("Đã xảy ra lỗi, hãy thử lại!");
        }
        setIsLoading(false);
      });
  };
  const handleChecked = (id) => {
    setTodoList(
      todoList.map((item) =>
        item._id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };
  const handleCannelClick = () => {
    const { id, isCompleted: oldCompleted } = editDataInfo;
    setTodoList(
      todoList.map((item) =>
        item._id === id ? { ...item, isCompleted: oldCompleted } : item
      )
    );
    setEditData({
      editingId: null,
    });
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setEditData({ ...editData, inputText: value });
  };
  return (
    <main className="__className_6a793a flex items-center justify-center p-8">
      <div className="container bg-slate-700 p-4 flex flex-col justify-center items-center">
        <h1 className="font-bold text-white">Wellcome to App!</h1>
        {/* Form */}
        <form action="" className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-teal-500 py-2 relative">
            <input
              onKeyUp={(e) => handleKeyUp(e)}
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
              onClick={(e) => handleClick(e)}
              className="bg-orange-500 hover:bg-orange-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute translate-x-4 left-full w-max"
            >
              Tìm kiếm
            </button>
          </div>
        </form>
        {/* List */}
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
            todoList.map(({ todo, _id: id, isCompleted }) =>
              editData.editingId === id ? (
                <li
                  key={id}
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
                >
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
                    value={HtmlScript(editData.inputText)}
                    onChange={(e) => handleInputChange(e)}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <label htmlFor={id} className="mr-2">
                        Completed
                      </label>
                      <input
                        type="checkbox"
                        id={id}
                        checked={isCompleted}
                        onChange={() => handleChecked(id)}
                        className="form-checkbox h-5 w-5 text-gray-600 "
                      />
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={handleCannelClick}
                        className="bg-orange-500 hover:bg-orange-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                      >
                        Thoát
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleUpdateClick(id, e)}
                        className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleDelete(id, e)}
                        className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </li>
              ) : (
                <li
                  key={id}
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
                >
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
                    value={todo}
                    style={
                      isCompleted ? { textDecoration: "line-through" } : {}
                    }
                    readOnly
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleEdit(id, todo, isCompleted)}
                        type="button"
                        className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(id)}
                        className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </li>
              )
            )
          )}
        </ul>
      </div>
    </main>
  );
}
