import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/client";
import { toast } from "react-toastify";

const initialState = {
  productList: [],
  cartList: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  status: "idle",
  totalPage: 0,
  quantity: localStorage.getItem("quantity")
    ? JSON.parse(localStorage.getItem("quantity"))
    : 0,
  productDetails: {},
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.quantity++;
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      const prevStateCart = JSON.parse(JSON.stringify(state.cartList));
      const product = action.payload;
      const find = prevStateCart.find((item) => item._id === product._id);
      if (find) {
        state.cartList = prevStateCart.map((item) =>
          item._id === find._id
            ? {
                ...item,
                quantity: item.quantity + 1,
                amount: item.amount - 1,
              }
            : item
        );
      } else {
        state.cartList = [action.payload, ...state.cartList];
      }
      localStorage.setItem("cart", JSON.stringify(state.cartList));
      toast.success(`Đã thêm "${action.payload.name}" vào giỏ hàng!`);
    },
    payProduct: (state) => {
      state.cartList = [];
      state.quantity = 0;
      toast.success("Đặt hàng thành công,quay trở lại trang mua sắm");
      localStorage.clear();
    },
    decreaseProduct: (state, action) => {
      const prevStateCart = JSON.parse(JSON.stringify(state.cartList));
      state.quantity = state.quantity - 1;
      state.cartList = prevStateCart.map((item) =>
        item._id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              amount: item.amount + 1,
            }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cartList));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
    },
    increaseProduct: (state, action) => {
      const prevStateCart = JSON.parse(JSON.stringify(state.cartList));
      state.quantity = state.quantity + 1;
      state.cartList = prevStateCart.map((item) =>
        item._id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              amount: item.amount - 1,
            }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cartList));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
    },
    deleteProduct: (state, action) => {
      const prevStateCart = JSON.parse(JSON.stringify(state.cartList));
      const itemIndex = prevStateCart.findIndex(
        (item) => item._id === action.payload._id
      );
      state.quantity = state.quantity - state.cartList[itemIndex].quantity;
      prevStateCart.splice(itemIndex, 1);
      state.cartList = prevStateCart;
      localStorage.setItem("cart", JSON.stringify(state.cartList));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      toast.success(`Đã xóa"${action.payload.name}"!`);
    },
  },
  extraReducers: (builder) => {
    builder
      //getProducts
      .addCase(getProducts.fulfilled, (state, action) => {
        state.totalPage = action.payload.data.totalPage;
        state.productList = action.payload.data.listProduct;
        state.status = "success";
      })
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
      })

      //getProductDetails
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload.data;
        state.status = "success";
      })
      .addCase(getProductDetails.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductDetails.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (query = {}) => {
    const queryString = new URLSearchParams(query).toString();
    const { data } = await client.get(`/products?${queryString}`);
    return data;
  }
);
export const getProductDetails = createAsyncThunk(
  "products/getProductDetails",
  async (id) => {
    const { data } = await client.get(`/products/` + id);
    return data;
  }
);
