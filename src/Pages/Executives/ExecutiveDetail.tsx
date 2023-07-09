import useFormatParams from "../../hooks/useFormatParams";
import ExecutiveCard from "../../components/ExecutiveCard";
import styled from "styled-components";
import { useOutletContext } from "react-router";
import { FetchStatus } from "../../hooks/useFetch";
import { ExecutiveResponse } from "../../types/types";
import { Puff } from "react-loader-spinner";
import { ToggleTheme } from "../../components/ThemeWrapper";
import { useContext } from "react";

type OutletContext = {
  data: ExecutiveResponse;
  status: FetchStatus;
};

function ExecutiveDetail() {
  const { committee } = useFormatParams();
  const { data, status } = useOutletContext<OutletContext>();
  const { theme } = useContext(ToggleTheme);

  if (status === "Fetching")
    return (
      <Spinner>
        <Puff color={theme.foreground} />
      </Spinner>
    );
  if (status === "Error") return <h1>There is an error wai</h1>;
  if (status === "Success") {
    const actualData = data[committee];
    return (
      <ExecutivesContainer>
        {actualData &&
          actualData.map((item) => {
            return <ExecutiveCard {...item} key={item.name} />;
          })}
      </ExecutivesContainer>
    );
  }

  return null;
}

const ExecutivesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  color: ${({ theme }) => theme.foreground};
`;

export default ExecutiveDetail;
