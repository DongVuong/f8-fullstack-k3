import { RANGE_NUMBER } from "../helper/data";
export const initialState = {
  themes: localStorage.getItem("themes")
    ? localStorage.getItem("themes")
    : "light",
  answer: "",
  history: [],
  playing: false,
  allHistory: localStorage.getItem("allHistory")
    ? JSON.parse(localStorage.getItem("allHistory"))
    : [],
};
export const rootReducer = (state, action) => {
  switch (action.type) {
    case "changeThemes": {
      if (state.themes === "light") {
        localStorage.setItem("themes", "dark");
        return { ...state, themes: "dark" };
      } else {
        localStorage.setItem("themes", "light");
        return { ...state, themes: "light" };
      }
    }
    case "finished": {
      localStorage.setItem(
        "allHistory",
        JSON.stringify([
          ...state.allHistory,
          [...state.history, action.payload],
        ])
      );
      return {
        ...state,
        history: [...state.history, action.payload],
        playing: false,
        allHistory: [...state.allHistory, [...state.history, action.payload]],
      };
    }
    case "clear": {
      return { ...state, allHistory: [] };
    }
    case "add": {
      return { ...state, history: [...state.history, action.payload] };
    }
    case "setAnswer": {
      return { ...state, answer: action.payload, history: [], playing: true };
    }
    default: {
      return state;
    }
  }
};
