"use client";

import { useTheme } from "@/contexts/Theme";
import sounds from "@/utils/themeButtonSound";

export default function DarkMode({
  outerColor = "bg-green-600",
  innerColor = "bg-white",
}) {
  const { theme, toggleTheme } = useTheme();
  const s = sounds();

  if (theme) {
    return (
      <button
        className={`${outerColor} block w-[35px] p-[5px] rounded-full`}
        title="toggle theme"
        id="toggleThemeBtn"
        onClick={() => {
          theme === "dark-mode" ? s.playOff() : s.playOn();
          toggleTheme();
        }}
      >
        <span
          className={`toggleThemeBtn-inner w-[14px] h-[10px] rounded-full block ${innerColor} transition-transform duration-300 ${
            theme === "dark-mode" ? "toggle-active translate-x-3" : ""
          }`}
        ></span>
      </button>
    );
  }
}