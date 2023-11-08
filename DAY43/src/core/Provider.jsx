import React, { useReducer } from "react";
import { createContext } from "react";
import { rootReducer, initialState } from "./rootReducer";
export const ProviderContext = createContext();
export default function Provider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}
