"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("dark-mode"));
    if (theme) {
      setTheme(theme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(theme));
    const body = document.body.classList;
    if (theme) {
      body.remove("light-mode");
      body.add("dark-mode");
    } else {
      body.remove("dark-mode");
      body.add("light-mode");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
