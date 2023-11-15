import { RANGE_NUMBER } from "../helper/data";
export const initialState = {
  themes: localStorage.getItem("themes")
    ? localStorage.getItem("themes")
    : "light",
  answer: "",
  history: [],
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
    case "add": {
      return { ...state, history: [...state.history, action.payload] };
    }
    case "setAnswer": {
      return { ...state, answer: action.payload, history: [] };
    }
    default: {
      return state;
    }
  }
};
