import React from "react";
import { useDispatch, useSelector } from "../core/hook";
import { toast } from "react-toastify";

function InputForm({ number }) {
  console.log("input render");
  const { answer, history } = useSelector();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(history.includes(+e.target.number.value));
    if (!history.includes(+e.target.number.value)) {
      if (e.target.number.value > answer) {
        toast.warning("Nhập số nhỏ thôi bạn ơi!");
        dispatch({
          type: "add",
          payload: +e.target.number.value,
        });
      } else if (e.target.number.value < answer) {
        toast.warning("Nhập số to lên bạn ơi!");
        dispatch({
          type: "add",
          payload: +e.target.number.value,
        });
      } else {
        toast.success("Đúng rồi, hay không bằng hên!");
      }
    } else {
      toast.warning("Bạn đã nhập số này rồi");
    }
  };
  console.log(history);
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="inputNumber" className="heading">
        Hãy thử nhập một số
      </label>
      <input
        className="prediction"
        autoComplete="off"
        autoCorrect="off"
        type="number"
        min={0}
        max={number - 1}
        name="number"
        placeholder="Thử một số"
        id="inputNumber"
      ></input>
    </form>
  );
}

export default InputForm;
