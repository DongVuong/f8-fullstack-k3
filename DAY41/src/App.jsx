import React, { useEffect, useState } from "react";
import GetTodo from "./component/GetTodo";
import { emailRegex } from "./helper/matchEmail";
import { client } from "./api/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DoubleBubble from "./helper/DoubleBubble.jsx";

export default function App() {
  const [apiKey, setApiKey] = useState(sessionStorage.getItem("apiKey"));
  const [isLoading, setIsLoading] = useState(false);
  const handleLoading = (boolean) => {
    setIsLoading(boolean);
  };
  const addLoading = (btn) => {
    if (btn) {
      btn.disabled = true;
    }
    handleLoading(true);
  };
  const removeLoading = (btn) => {
    if (btn) {
      btn.disabled = false;
    }
    handleLoading(false);
  };
  useEffect(() => {
    if (apiKey) {
      let name = sessionStorage.getItem("email");
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
      sessionStorage.setItem("apiKey", apiKey);
      sessionStorage.setItem("email", email);
      setApiKey(apiKey);
    }
  };

  return (
    <>
      {isLoading && <DoubleBubble />}
      {
        <GetTodo
          apiKey={apiKey}
          handleLoading={handleLoading}
          addLoading={addLoading}
          removeLoading={removeLoading}
        />
      }
    </>
  );
}
