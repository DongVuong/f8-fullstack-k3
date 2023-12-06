import { createSlice } from "@reduxjs/toolkit";
// import { getData } from "../middleware/homeMiddleware";

const initialState = {
  arr: [],
};
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getData.fulfilled, (state, action) => {
  //         console.log(action, 1);
  //       })
  //       .addCase(getData.pending, (state, action) => {
  //         console.log(action, 2);
  //       })
  //       .addCase(getData.rejected, (state, action) => {
  //         console.log(action, 3);
  //       });
  //   },
});
