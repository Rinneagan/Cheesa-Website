import { useOutletContext } from "react-router-dom";

function ExecutivesIndex() {
  const year = useOutletContext<string>();
  return <div>{year}</div>;
}

export default ExecutivesIndex;
