import { useParams } from "react-router";
import { years } from "../data/data";
import { commData } from "../data/data";

function useFormatParams() {
  const { year } = useParams();
  let activeYear: years;
  let committee: commData = "executive_committee";
  const currentYear = new Date().getFullYear().toString() as years;

  if (year) {
    const yearParam = year.match(/\d{4}/);
    const committeeParam = year.match(/\d{4}-(.*)/);
    const formattedCommittee =
      committeeParam && committeeParam[1].replace("-", "_");
    committee = formattedCommittee
      ? (formattedCommittee as commData)
      : "executive_committee";
    activeYear = yearParam ? (yearParam[0] as years) : currentYear;
  } else activeYear = currentYear;

  return { activeYear, committee };
}

export default useFormatParams;
