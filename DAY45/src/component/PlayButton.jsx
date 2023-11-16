import React from "react";
import { useDispatch } from "../core/hook";
import { toast } from "react-toastify";

function PlayButton({ number }) {
  const dispatch = useDispatch();
  let answerRefresh = Math.floor(Math.random() * number) + 1;
  const handleReturn = (e) => {
    e.preventDefault();
    // console.log(setAnswer);
    toast("Chúc bạn may mắn!!!");
    dispatch({
      type: "setAnswer",
      payload: answerRefresh,
    });
  };
  return (
    <button type="button" className="btn btn-warning" onClick={handleReturn}>
      Chơi lại
    </button>
  );
}

export default PlayButton;
