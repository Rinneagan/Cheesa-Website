import { Theme } from "../types/types";

export const HeaderStyles = {
  hero: {
    backgroundColor: "transparent",
    color: "#fff",
  },
};

export const THEME: Theme = {
  light: {
    background: "hsl(0, 0%, 100%)",
    foreground: "hsl(212, 89%, 5%)",
    accent: "hsl(211, 100%, 55%)",
    cheesaBlue: "hsl(211, 100%, 28%)",
    mode: "light",
    secondary: "#e7e7e7",
  },
  dark: {
    background: "hsl(212, 89%, 5%)",
    foreground: "hsl(0, 0%, 97%)",
    accent: "hsl(211, 100%, 85%)",
    cheesaBlue: "	hsl(211, 100%, 28%)",
    mode: "dark",
    secondary: "#1E293B",
  },
};
