import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/style.scss";
import Provider from "./core/Provider.jsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
  //</React.StrictMode>
);
