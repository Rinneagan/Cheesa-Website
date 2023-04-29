import { createContext, useState } from "react";
import { ThemeMode } from "../types/types";
import { THEME } from "../utils/constants";
import React from "react";

type ThemeContextProps = {
  theme: ThemeMode;
  handleTheme: () => void;
};

export const ToggleTheme = createContext({} as ThemeContextProps);

export default function ThemeWrapper({ children }: React.PropsWithChildren) {
  const mode: "light" | "dark" = "light";
  const [theme, setTheme] = useState<ThemeMode>(THEME[mode]);

  function handleTheme() {
    if (theme.mode === "light") {
      setTheme(THEME.dark);
      return;
    }
    setTheme(THEME.light);
  }

  return (
    <ToggleTheme.Provider value={{ theme, handleTheme }}>
      {children}
    </ToggleTheme.Provider>
  );
}
