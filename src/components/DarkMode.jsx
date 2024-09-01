import { useTheme } from "@/contexts/Theme";
import themeBtnSfx from "@/utils/themeButtonSound";

export default function DarkMode({
  outerColor = "bg-primary",
  innerColor = "bg-primary_dark",
}) {
  const { theme, toggleTheme } = useTheme();
  const [playOn, playOff] = themeBtnSfx();

  if (theme) {
    return (
      <span
        className={`${outerColor} block w-[35px] p-[5px] rounded-full`}
        title="toggle theme"
        id="toggleThemeBtn"
        onClick={() => {
          theme === "dark-mode" ? playOff() : playOn();
          toggleTheme();
        }}
      >
        <span
          className={`toggleThemeBtn-inner w-[14px] h-[10px] rounded-full block ${innerColor}  transition-[margin-left] ${
            theme === "dark-mode" ? "toggle-active ml-[12px]" : ""
          }`}
        ></span>
      </span>
    );
  }
}
