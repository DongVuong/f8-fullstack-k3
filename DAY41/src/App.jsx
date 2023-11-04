import React, { useEffect, useState } from "react";
import GetTodo from "./component/GetTodo";
import { emailRegex } from "./helper/matchEmail";
import { client } from "./api/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey"));
  useEffect(() => {
    if (apiKey) {
      let name = localStorage.getItem("email");
      name = name.split("@")[0];
      window.alert(`Chao mung ${name} quay tro lai`);
    } else if (!apiKey) {
      const email = window.prompt(
        "Please enter your email:",
        `donguet.vnu@gmail.com`
      );
      if (email && emailRegex(email)) {
        getApiKey(email);
      } else {
        window.alert("Email không hợp lệ");
        window.location.reload();
      }
    }
  }, []);
  const getApiKey = async (email) => {
    const { data, response } = await client.get(`/api-key?email=${email}`);
    if (response.ok) {
      const apiKey = data.data.apiKey;
      localStorage.setItem("apiKey", apiKey);
      localStorage.setItem("email", email);
      setApiKey(apiKey);
    }
  };

  return <GetTodo apiKey={apiKey} />;
}
