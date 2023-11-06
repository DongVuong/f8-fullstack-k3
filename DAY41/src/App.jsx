import React, { useEffect, useState } from "react";
import GetTodo from "./components/GetTodo";
import { emailRegex } from "./helper/matchEmail";
import { client } from "./api/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DoubleBubble from "./components/DoubleBubble.jsx";

export default function App() {
  const [apiKey, setApiKey] = useState(sessionStorage.getItem("apiKey"));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (apiKey) {
      let name = sessionStorage.getItem("email");
      name = name.split("@")[0];
      // window.alert(`Chao mung ${name} quay tro lai`);
      toast.success(`Chào mừng ${name} quay trở lại`);
    } else if (!apiKey) {
      const email = window.prompt(
        "Please enter your email:",
        `donguet.vnu@gmail.com`
      );
      if (email && emailRegex(email)) {
        setIsLoading(true);
        getApiKey(email).finally(() => setIsLoading(false));
      } else {
        // window.alert("Email không hợp lệ");
        toast.error("Email không hợp lệ");
        window.location.reload();
      }
    }
  }, []);
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
    <>
      <ToastContainer />
      {isLoading && <DoubleBubble />}
      {<GetTodo apiKey={apiKey} setIsLoading={setIsLoading} />}
    </>
  );
}
