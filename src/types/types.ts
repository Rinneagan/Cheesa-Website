export type ThemeTypes = {
  background: string;
  foreground: string;
  accent: string;
  cheesaBlue: string;
  mode: ThemeMode;
};

export type ThemeMode = "light" | "dark";

export type Theme = Record<ThemeMode, ThemeTypes>;

export type ExecutiveDetail = {
  name: string;
  portfolio: string;
  img_url: { asset: { url: string } };
};

export type ExecutiveResponseFields =
  | "peer_counseling_board"
  | "industrial_committee"
  | "academic_board"
  | "executive_committee"
  | "organizing_committee"
  | "sports_committee"
  | "electoral_committee"
  | "prayer_board"
  | "mentorship_board"
  | "welfare_board"
  | "editorial_board"
  | "judicial_committee"
  | "women_commission";

export type ExecutiveResponse = {
  [K in ExecutiveResponseFields]: ExecutiveDetail[];
};

// export type ExecutivesData = {
//   year: string;
//   executives: ExecutiveDetail[];
// }[];
