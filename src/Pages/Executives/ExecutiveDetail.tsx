import useFormatParams from "../../hooks/useFormatParams";
import ExecutiveCard from "../../components/ExecutiveCard";
import styled from "styled-components";
import { useOutletContext } from "react-router";
import { FetchStatus } from "../../hooks/useFetch";
import { ExecutiveResponse } from "../../types/types";

type OutletContext = {
  data: ExecutiveResponse;
  status: FetchStatus;
};

function ExecutiveDetail() {
  const { committee } = useFormatParams();
  const { data, status } = useOutletContext<OutletContext>();
  let actualData;
  if (data) {
    actualData = data[committee];
    console.log(actualData);
  } else {
    console.log("Loading...");
  }

  return (
    <ExecutivesContainer>
      {actualData &&
        actualData.map((item) => {
          return <ExecutiveCard {...item} key={item.name} />;
        })}
    </ExecutivesContainer>
  );
}

const ExecutivesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default ExecutiveDetail;
