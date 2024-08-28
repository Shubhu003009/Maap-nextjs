import { useTheme } from "@/contexts/Theme";
import "./darkMode.scss";
import themeBtnSfx from "@/utils/themeButtonSound";

export default function DarkMode() {
  const { theme, toggleTheme } = useTheme();
  const [playOn, playOff] = themeBtnSfx();

  return (
    <div
      className={`${theme ? "bg-white" : "bg-[#01493C]"}`}
      title="toggle theme"
      id="toggleThemeBtn"
      onClick={() => {
        theme ? playOff() : playOn();
        toggleTheme();
      }}
    >
      <div
        className={`toggleThemeBtn-inner ${
          theme ? " toggle-active bg-[#01493C]" : "bg-white"
        }`}
      />
    </div>
  );
}
