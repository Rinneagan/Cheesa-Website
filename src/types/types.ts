export type ThemeTypes = {
  background: string;
  foreground: string;
  accent: string;
  cheesaBlue: string;
  mode: ThemeMode;
  secondary: string;
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

type SanityImageURL = { asset: { url: string } };

export type LecturersResponse = {
  fullName: string;
  email: string;
  lecturerImage: SanityImageURL;
  description: string;
}[];

export type ExecutivesData = {
  year: string;
  executives: ExecutiveDetail[];
}[];

export type GalleryResponse = {
  image_url: SanityImageURL;
  image_alt: string;
  link: string;
}[];

export type EventsFields = {
  eventName: string;
  eventDescription: string;
  eventImage: SanityImageURL;
  eventCategory: "ongoing" | "upcoming" | "completed";
};

export type EventsResponse = EventsFields[];
