import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch } from "../core/hook";
import { useSelector } from "../core/hook";

function Button() {
  const dispatch = useDispatch();
  const { themes } = useSelector();
  // console.log("button render");
  const handleChangeThemes = () => {
    dispatch({
      type: "changeThemes",
    });
  };

  return (
    <button
      type="button"
      title="Change theme"
      className="change-theme"
      onClick={handleChangeThemes}
    >
      {themes === "light" ? (
        <i className="fa-regular fa-moon fa-lg"></i>
      ) : (
        <i className="fa-regular fa-sun fa-lg"></i>
      )}
    </button>
  );
}

export default Button;
