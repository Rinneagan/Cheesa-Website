import { useState, useEffect } from "react";
import { ThemeMode } from "../types/types";

function getColorScheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)");
  return isDark.matches ? "dark" : "light"; //setting 'no-preference' automatically to 'light'
}

function usePreferredColorScheme() {
  const [preferredScheme, setPreferredScheme] = useState<ThemeMode>(() =>
    getColorScheme()
  );

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    const isLight = window.matchMedia("(prefers-color-scheme: light)");
    if (typeof isLight.addEventListener === "function") {
      const listener = (
        event: MediaQueryListEvent,
        preferredScheme: ThemeMode
      ): void => {
        event.matches && setPreferredScheme(preferredScheme);
      };
      isDark.addEventListener("change", (e) => listener(e, "dark"));
      isLight.addEventListener("change", (e) => listener(e, "light"));

      return () => {
        isDark.removeEventListener("change", (e) => listener(e, "dark"));
        isLight.removeEventListener("change", (e) => listener(e, "light"));
      };
    }
  });

  return preferredScheme;
}

export default usePreferredColorScheme;
