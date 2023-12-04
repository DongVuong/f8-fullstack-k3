"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemesProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (localStorage.getItem("theme"))
      setTheme(JSON.parse(localStorage.getItem("theme")));
    else {
      localStorage.setItem("theme", JSON.stringify("light"));
      setTheme("light");
    }
  }, [theme]);
  const handleTheme = (value) => {
    setTheme(value);
    localStorage.setItem("theme", JSON.stringify(value));
  };
  const data = {
    theme,
    handleTheme,
  };

  return (
    <ThemeContext.Provider value={data}>
      <div className={`${theme} transition`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemesProvider;
