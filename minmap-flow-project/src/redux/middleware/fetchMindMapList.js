import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = process.env.NEXT_PUBLIC_MY_SERVER_API;
export const fetchMindmapList = createAsyncThunk(
  "fetchMindmapList",
  async () => {
    const response = await fetch(baseUrl);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else return [];
  }
);

export const fetchMindmapId = createAsyncThunk("fetchMindmapId", async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else return {};
});

export const fetchAddMindmap = createAsyncThunk(
  "fetchAddMindmapList",
  async (payload) => {
    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }
);

export const fetchUpdateMindmap = createAsyncThunk(
  "fetchUpdateMindmapList",
  async (payload) => {
    const response = await fetch(`${baseUrl}/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }
);

export const fetchDeleteMindmap = createAsyncThunk(
  "fetchDeleteMindmapList",
  async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
  }
);

// https://mindmap.ndng.net
