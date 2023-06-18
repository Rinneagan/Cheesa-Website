export const committees = ["Executive Committee", "Academic Board"];

export type commData = "executive_committee" | "academic_board";

type executive = Record<"name" | "portfolio", string>;

export type years = "2023" | "2022";

type ExecutivesData = {
  [K in years]: {
    [J in commData]: executive[];
  };
};

export const Data: ExecutivesData = {
  2023: {
    executive_committee: [
      {
        name: "Caleb Arkoh",
        portfolio: "President",
      },
      {
        name: "Joshua Owusu Richardson",
        portfolio: "Vice President",
      },
      {
        name: "Evans Elabo",
        portfolio: "Organizing Secretary",
      },
      {
        name: "Gracia Tabil",
        portfolio: "General Secretary",
      },
    ],
    academic_board: [
      {
        name: "Kwame Moses",
        portfolio: "Chairperson",
      },
      {
        name: "Nana Kwame Moses",
        portfolio: "Deputy Chairperson",
      },
    ],
  },
  2022: {
    executive_committee: [
      {
        name: "Sabbah Daniel",
        portfolio: "President",
      },
      {
        name: "Susana Taibobo",
        portfolio: "Vice President",
      },
      {
        name: "Apraku Samuel",
        portfolio: "Organizing Secretary",
      },
      {
        name: "Adu Gyamfi Sebastian",
        portfolio: "General Secretary",
      },
    ],
    academic_board: [
      {
        name: "Mella Tabitha",
        portfolio: "Chairperson",
      },
      {
        name: "Smooth Gee",
        portfolio: "Deputy Chairperson",
      },
    ],
  },
};
