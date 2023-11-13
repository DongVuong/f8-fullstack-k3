import React, { useState } from "react";
import MainContent from "./component/MainContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DoubleBubble from "./component/DoubleBubble";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();
  return (
    <main className="MuiBox-root">
      <ToastContainer />
      {isLoading && <DoubleBubble />}
      <MainContent />
    </main>
  );
}

export default App;
