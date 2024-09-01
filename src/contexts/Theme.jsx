"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: null,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [hydrated, setHydrated] = useState(false); // Hydration flag
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const theme =
      JSON.parse(localStorage.getItem("color_theme")) || "light-mode";
    setTheme(theme);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("color_theme", JSON.stringify(theme));
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, hydrated]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light-mode" ? "dark-mode" : "light-mode"));
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
