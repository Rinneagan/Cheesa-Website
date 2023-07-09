import { useParams } from "react-router";
import { years } from "../data/data";
import { ExecutiveResponseFields } from "../types/types";

function useFormatParams() {
  const { year } = useParams();
  let activeYear: years;
  let committee: ExecutiveResponseFields = "executive_committee";
  const currentYear = new Date().getFullYear().toString() as years;

  if (year) {
    const yearParam = year.match(/\d{4}/);
    const committeeParam = year.match(/\d{4}-(.*)/);
    const formattedCommittee =
      committeeParam && committeeParam[1].replaceAll("-", "_");
    committee = formattedCommittee
      ? (formattedCommittee as ExecutiveResponseFields)
      : "executive_committee";
    activeYear = yearParam ? (yearParam[0] as years) : currentYear;
  } else activeYear = currentYear;

  return { activeYear, committee };
}

export default useFormatParams;
