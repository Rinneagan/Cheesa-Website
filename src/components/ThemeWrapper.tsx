import { createContext, useState, useEffect } from "react";
import { ThemeTypes } from "../types/types";
import { THEME } from "../utils/constants";
import React from "react";
import { loadData, saveData } from "../utils/utils";

type ThemeContextProps = {
  theme: ThemeTypes;
  handleTheme: () => void;
};

export const ToggleTheme = createContext({} as ThemeContextProps);

export default function ThemeWrapper({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeTypes>(THEME[loadData("cheesa")]);

  useEffect(() => {
    saveData("cheesa", theme.mode);
  }, [theme]);

  function handleTheme() {
    if (theme.mode === "dark") {
      setTheme(THEME.light);
    } else {
      setTheme(THEME.dark);
    }
  }

  return (
    <ToggleTheme.Provider value={{ theme, handleTheme }}>
      {children}
    </ToggleTheme.Provider>
  );
}
