"use client";
import { useState, createContext, useEffect } from "react";
import { cn } from "./utils";

export const ThemeContext = createContext();

export const ThemeProvider = ({ className, children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode }}>
      <div className={cn(className, darkMode ? "dark" : null)}>{children}</div>
    </ThemeContext.Provider>
  );
};
