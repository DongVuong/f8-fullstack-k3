import React, { createContext, useEffect, useState } from "react";
import Todo from "./components/Todo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emailRegex } from "./helper/matchEmail";
import { client } from "./api/client";
import DoubleBubble from "./helper/DoubleBubble.jsx";
export const DefaultContext = createContext();
export default function App() {
  const [apiKey, setApiKey] = useState(sessionStorage.getItem("apiKey"));

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (apiKey) {
      client.setApiKey(apiKey);
      client.get(`/users/profile`).then(({ response, data }) => {
        if (response.ok) {
          let name = data.data.emailId.name;
          toast.success(`Chào mừng ${name} quay trở lại`);
        } else {
          toast.error("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại");
          sessionStorage.setItem("apiKey", "");
          sessionStorage.setItem("email", "");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      });
    } else if (!apiKey) {
      const email = window.prompt(
        "Please enter your email:",
        `donguet.vnu@gmail.com`
      );
      if (email && emailRegex(email)) {
        // setIsLoading(true);
        getApiKey(email);
        // .finally(() => setIsLoading(false));
      } else {
        toast.error("Email không hợp lệ");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }
  }, [apiKey]);
  const getApiKey = async (email) => {
    const { data, response } = await client.get(`/api-key?email=${email}`);
    if (response.ok) {
      const apiKey = data.data.apiKey;
      sessionStorage.setItem("apiKey", apiKey);
      sessionStorage.setItem("email", email);
      setApiKey(apiKey);
    } else {
      throw new Error(data.message);
    }
  };
  return (
    <DefaultContext.Provider
      value={{
        apiKey,
        setApiKey,
        isLoading,
        setIsLoading,
        productList,
        setProductList,
      }}
    >
      <ToastContainer />
      {isLoading && <DoubleBubble />}
      <Todo />
    </DefaultContext.Provider>
  );
}
