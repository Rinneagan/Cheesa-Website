export type ThemeTypes = {
  background: string;
  foreground: string;
  accent: string;
  cheesaBlue: string;
  mode: ThemeMode;
};

export type ThemeMode = "light" | "dark";

export type Theme = Record<ThemeMode, ThemeTypes>;

export type ExecutiveDetail = Record<"name" | "portfolio", string>;

export type ExecutivesData = {
  year: string;
  executives: ExecutiveDetail[];
}[];
