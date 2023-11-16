import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../core/hook";
import { toast } from "react-toastify";

function InputForm({ number, remainTime }) {
  const { answer, history, playing, allHistory } = useSelector();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!history.includes(+e.target.number.value)) {
      if (remainTime === 1) {
        dispatch({
          type: "finished",
          payload: +e.target.number.value,
        });
        if (e.target.number.value == answer) {
          toast.success("May quá đúng rồi");
        } else {
          toast.error("Hãy thử lại vận may của mình nhé!");
        }
      } else {
        if (e.target.number.value > answer) {
          dispatch({
            type: "add",
            payload: +e.target.number.value,
          });
          toast.warning("Nhập số nhỏ thôi bạn ơi!");
        } else if (e.target.number.value < answer) {
          dispatch({
            type: "add",
            payload: +e.target.number.value,
          });
          toast.warning("Nhập số to lên bạn ơi!");
        } else {
          toast.success("Đúng rồi, hay không bằng hên!");
          dispatch({
            type: "finished",
            payload: +e.target.number.value,
          });
        }
      }
    } else {
      toast.warning("Bạn đã nhập số này rồi");
    }
  };
  console.log(allHistory);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="inputNumber" className="heading">
          Hãy thử nhập một số
        </label>
        <input
          className="prediction"
          autoComplete="off"
          autoCorrect="off"
          type="number"
          min={1}
          max={number - 1}
          name="number"
          placeholder="Thử một số"
          id="inputNumber"
        ></input>
      </form>
    </>
  );
}

export default InputForm;
