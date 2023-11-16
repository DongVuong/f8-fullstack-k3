import React, { useEffect, useLayoutEffect, useState } from "react";
import InputForm from "./component/InputForm";
import Button from "./component/Button";
import { useDispatch, useSelector } from "./core/hook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import maxTime from "./helper/data";
import { RANGE_NUMBER } from "./helper/data";
import InputRange from "./component/InputRange";
import PlayButton from "./component/PlayButton";
import HistoryShow from "./component/HistoryShow";

function App() {
  const { themes, history, playing, allHistory } = useSelector();
  const [number, setNumber] = useState(RANGE_NUMBER);
  const dispatch = useDispatch();
  let remainTime = maxTime(number) - history.length;
  const handleChangeNumber = (value) => {
    setNumber(value);
  };
  // console.log(`app render`);
  useEffect(() => {
    toast.success("Chào mừng bạn đến với trò chơi đoán số!");
  }, []);
  useLayoutEffect(() => {
    dispatch({
      type: "setAnswer",
      payload: Math.floor(Math.random() * number) + 1,
    });
  }, [number]);
  return (
    <main className={themes === "light" ? "" : "dark"}>
      <ToastContainer />
      <div>
        <h2 className="heading">Chào mừng bạn đến với trò chơi đoán số!</h2>
        <h2 className="heading">
          Còn {remainTime}/{maxTime(number)} lần
        </h2>
        <h2 className="heading">
          Bạn cần tìm kiếm một số từ 1 đến {number - 1}
        </h2>
      </div>
      <InputRange handleChangeNumber={handleChangeNumber} />
      {playing && <InputForm number={number} remainTime={remainTime} />}
      {!playing && <PlayButton number={number} />}
      <Button number={number} />
      {allHistory.length > 0 && <HistoryShow maxTime={maxTime(number)} />}
    </main>
  );
}

export default App;
