import React from "react";
import { useDispatch, useSelector } from "../core/hook";
import { toast } from "react-toastify";

function HistoryShow({ maxTime }) {
  const { allHistory } = useSelector();
  const dispatch = useDispatch();
  const handleDelete = () => {
    localStorage.setItem("allHistory", []);
    dispatch({
      type: "clear",
    });
  };
  return (
    <div>
      <button onClick={handleDelete} className="trash">
        <i className="fa-regular fa-trash-can"></i>
      </button>
      {allHistory.map((item, index) => (
        <table key={index}>
          <thead>
            <tr>
              <th>Số lần</th>
              <th>Giá trị</th>
            </tr>
          </thead>
          <tbody>
            {item.map((child, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{child}</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="2">Số lần nhập tối đa:{item.length}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default HistoryShow;
