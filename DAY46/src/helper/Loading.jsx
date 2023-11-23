import React from "react";
import ReactLoading from "react-loading";
import "./loading.scss";
function Loading() {
  return (
    <div className="loading">
      <ReactLoading
        type={"bubbles"}
        color={"rgb(179, 121, 14)"}
        height={"10%"}
        width={"10%"}
      />
    </div>
  );
}

export default Loading;
