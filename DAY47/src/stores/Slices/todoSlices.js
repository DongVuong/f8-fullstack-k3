import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUtils";
import { getTasks } from "../middleware/getTaskMiddleware";
import { getApiKey } from "../middleware/loginMiddleware";
import { toast } from "react-toastify";
const apiKey = localStorage.getItem("apiKey") || "";
if (apiKey) {
  client.setApiKey(apiKey);
}

const isLogin = localStorage.getItem("apiKey") ? true : false;

const initialState = {
  columns: [],
  tasks: [],
  isLogin,
  apiKey,
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task._id === action.payload
      );
      state.tasks.splice(index, 1);
    },
    sortColumnsData: (state, action) => {
      state.columns = action.payload;
      localStorage.setItem("columns", action.payload);
    },
    sortTasksData: (state, action) => {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getApiKey.fulfilled, (state, action) => {
        if (action.payload.status_code === "SUCCESS") {
          state.isLogin = true;
          state.apiKey = action.payload.data.apiKey;
          client.setApiKey(action.payload.data.apiKey);
          localStorage.setItem("apiKey", action.payload.data.apiKey);
          toast.success(action.payload.message);
        } else {
          toast.error(action.payload.message);
          localStorage.removeItem("apiKey");
        }

        state.status = "success";
      })
      .addCase(getApiKey.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getApiKey.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        if (action.payload.status_code === "SUCCESS") {
          state.columns = action.payload.data.columns;
          state.tasks = action.payload.data.tasks;
        } else {
          localStorage.removeItem("apiKey");
          window.location.reload();
        }
        state.status = "success";
      })
      .addCase(getTasks.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.status = "error";
      });
  },
});
