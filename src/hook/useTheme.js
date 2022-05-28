import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("dark");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const checkTheme = localStorage.getItem("theme");
    if (!checkTheme) {
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(checkTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
