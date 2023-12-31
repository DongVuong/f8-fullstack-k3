import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialNodes: [
    {
      id: "0",
      type: "input",
      data: { label: "Node" },
      position: { x: 0, y: 50 },
    },
  ],
  id: 1,
};
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});
