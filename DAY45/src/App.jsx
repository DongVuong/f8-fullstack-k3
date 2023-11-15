import React, { useEffect, useLayoutEffect, useState } from "react";
import InputForm from "./component/InputForm";
import Button from "./component/button";
import { useDispatch, useSelector } from "./core/hook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import maxTime from "./helper/data";
import { RANGE_NUMBER } from "./helper/data";
import InputRange from "./component/InputRange";

function App() {
  const { themes, history } = useSelector();
  const [number, setNumber] = useState(RANGE_NUMBER);
  const dispatch = useDispatch();
  const handleChangeNumber = (value) => {
    setNumber(value);
  };
  console.log(`app render`);
  useEffect(() => {
    toast.success("Chào mừng bạn đến với trò chơi đoán số!");
  }, []);
  useLayoutEffect(() => {
    let setAnswer = Math.floor(Math.random() * number);
    dispatch({
      type: "setAnswer",
      payload: setAnswer,
    });
  }, [number]);

  return (
    <main className={themes === "light" ? "" : "dark"}>
      <ToastContainer />
      <div>
        <h2 className="heading">Chào mừng bạn đến với trò chơi đoán số!</h2>
        <h2 className="heading">
          Còn {maxTime(number) - history.length}/{maxTime(number)} lần
        </h2>
        <h2 className="heading">
          Bạn cần tìm kiếm một số từ 1 đến {number - 1}
        </h2>
      </div>
      <InputRange handleChangeNumber={handleChangeNumber} />
      <InputForm number={number} />
      <Button />
    </main>
  );
}

export default App;
