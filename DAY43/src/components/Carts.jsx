import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { useSelector } from "../core/hook";
import { useDispatch } from "../core/hook";
import { toast } from "react-toastify";
import { client } from "../api/client";
import { DefaultContext } from "../App";

export default function Carts() {
  const { apiKey, isLoading, setIsLoading } = useContext(DefaultContext);
  const { productList, setProductList } = useContext(DefaultContext);
  let { loading } = useContext(DefaultContext);
  const carts = useSelector();
  const dispatch = useDispatch();
  console.log(carts);
  const handleSubmit = () => {
    let body = [];
    body = carts.map(({ id, quantity }) => ({
      productId: id,
      quantity: quantity,
    }));
    if (body && apiKey) {
      setIsLoading(true);
      client.setApiKey(apiKey);
      client.post("/orders", body).then(({ response, data }) => {
        if (response.ok) {
          setIsLoading(false);
          toast.success(data.message);
          dispatch({
            type: "pay",
            payload: {},
          });
          window.scroll(0, 0);
        } else {
          toast.error(data.message);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });
    } else {
      toast.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };
  useEffect(() => {
    if (Array.isArray(carts) & !carts.length & !isLoading) {
      if (apiKey) {
        client.setApiKey(apiKey);
        setIsLoading(true);
        client
          .get("/products?limit=8")
          .then(({ response, data }) => {
            if (response.ok) {
              setProductList(data.data);
            } else {
              setIsLoading(true);
              toast.error("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại");
              sessionStorage.clear();
              window.location.reload();
            }
            loading = false;
          })
          .finally(() => setIsLoading(false));
      }
    }
  }, [carts]);

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
          <tbody className="bg-white divide-y">
            {carts.map(({ name, quantity, remain, price, id }) => (
              <tr className="text-gray-700" key={id}>
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <p className="font-semibold">{name}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{quantity}</td>
                <td className="px-4 py-3 text-sm">{remain}</td>
                <td className="px-4 py-3 text-sm">{price}</td>
              </tr>
            ))}
          </tbody>
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
