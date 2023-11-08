import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "../core/hook";
import { useDispatch } from "../core/hook";
import { toast } from "react-toastify";

export default function Carts() {
  const [carts, setCarts] = useState(useSelector());
  const dispatch = useDispatch();
  const handleSubmit = () => {
    toast.success("Thanh toán thành công!!");
    dispatch({
      type: "pay",
      payload: {},
    });
  };

  return carts.length === 0 ? (
    <p className="text-white font-light mt-4">
      Chưa có gì trong giỏ hàng cả!!!!
    </p>
  ) : (
    <div className="w-full overflow-hidden rounded-lg shadow-xs mt-4">
      <div className="w-full overflow-x-auto relative">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
              <th className="px-4 py-3">Tên sản phẩm</th>
              <th className="px-4 py-3">Số lượng</th>
              <th className="px-4 py-3">Còn lại</th>
              <th className="px-4 py-3">Tổng tiền</th>
            </tr>
          </thead>
          {carts.map(({ name, quantity, remain, price, id }) => (
            <tbody className="bg-white divide-y" key={id}>
              <tr className="text-gray-700">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <p className="font-semibold">{name}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{quantity}</td>
                <td className="px-4 py-3 text-sm">{remain}</td>
                <td className="px-4 py-3 text-sm">{price}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 select-none text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-max relative right-0"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
}
