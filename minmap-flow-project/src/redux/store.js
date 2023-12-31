import { configureStore } from "@reduxjs/toolkit";
import mindMapSlice from "./slice/mindMapSlice";
// import { flows } from "../services/flowQuerry";
export const store = configureStore({
  reducer: {
    mindmap: mindMapSlice.reducer,
  },
  devTools: true,
});
