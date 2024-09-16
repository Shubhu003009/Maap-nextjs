import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "light-mode", // Default theme
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light-mode" ? "dark-mode" : "light-mode",
    })),
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

export default useThemeStore;
