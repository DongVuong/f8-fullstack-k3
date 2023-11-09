import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { DefaultContext } from "../App";
import { client } from "../api/client";
import { useDispatch } from "../core/hook";
import { toast } from "react-toastify";

export default function Products() {
  const { apiKey, setApiKey, setIsLoading } = useContext(DefaultContext);
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  const handleAdd = (id, name, image, quantity, price) => {
    toast.success("Đã thêm vào giỏ hàng thành công");
    dispatch({
      type: "addProductItem",
      payload: {
        id,
        name,
        image,
        quantity,
        price,
      },
    });
  };
  useEffect(() => {
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
        })
        .finally(() => setIsLoading(false));
    }
  }, [apiKey]);

  return (
    <div className="product-list grid grid-cols-4 gap-4">
      {productList.map(({ _id: id, name, image, quantity, price }) => (
        <div
          key={id}
          className="box p-4 shadow-lg bg-white rounded-lg relative "
        >
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-normal mt-2">{name}</h2>
          <h3>Số lượng sản phẩm tồn kho:{quantity}</h3>
          <div className="flex justify-between items-center">
            <span className="text-orange-500 font-bold">${price}</span>
            <button
              onClick={() => handleAdd(id, name, image, quantity, price)}
              className="bg-green-500 hover:bg-green-700 select-none text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Add to cart!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
