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
    // let lastScrollY = 0;
    // let nav = document.getElementById("header");
    // const scrollY = window.addEventListener("scroll", () => {
    //   let currentScrollY = window.scrollY;
    //   if (currentScrollY > lastScrollY) {
    //     console.log("scroll Down");
    //     nav.classList.add("nav_hidden");
    //   } else {
    //     console.log("scroll up");
    //     nav.classList.remove("nav_hidden");
    //   }
    //   lastScrollY = currentScrollY;
    // });
    const theme =
      JSON.parse(localStorage.getItem("color_theme")) || "light-mode";
    setTheme(theme);
    setHydrated(true);

    // return () => {
    //   window.removeEventListener("scroll", scrollY);
    // };
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("color_theme", JSON.stringify(theme));
      document.documentElement.setAttribute("data-theme", theme);
      if (theme === "dark-mode") {
        document.querySelector(".gradient").classList.add("active");
      } else {
        document.querySelector(".gradient").classList.remove("active");
      }
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
