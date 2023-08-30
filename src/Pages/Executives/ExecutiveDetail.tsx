import useFormatParams from "../../hooks/useFormatParams";
import ExecutiveCard from "../../components/ExecutiveCard";
import styled from "styled-components";
import { useOutletContext } from "react-router";
import { FetchStatus } from "../../hooks/useFetch";
import { ExecutiveResponse } from "../../types/types";
import { Oval } from "react-loader-spinner";
import { ToggleTheme } from "../../components/ThemeWrapper";
import { useContext } from "react";
import { Committees } from "../../data/data";
import { Subheading } from "../../utils/ReusableStyles";

type OutletContext = {
  data: ExecutiveResponse;
  status: FetchStatus;
  YEARS: string[];
};

function ExecutiveDetail() {
  const { committee, activeYear } = useFormatParams();
  const { data, status, YEARS } = useOutletContext<OutletContext>();
  const { theme } = useContext(ToggleTheme);

  const CommitteeTitle = Committees.find(
    (item) => item.toLocaleLowerCase().replaceAll(" ", "_") === committee
  );

  if (status === "Fetching")
    return (
      <Spinner>
        <Oval color={theme.foreground} secondaryColor={theme.cheesaBlue} />
      </Spinner>
    );
  if (status === "Error")
    return <h1>Couldn't fetch data, kindly refresh the page. </h1>;
  if (status === "Success") {
    const actualData = data[YEARS.indexOf(activeYear)][committee];
    return (
      <>
        <Subheading>{CommitteeTitle}</Subheading>
        <ExecutivesContainer>
          {actualData ? (
            actualData.map((item) => {
              return <ExecutiveCard {...item} key={item.name} />;
            })
          ) : (
            <h1>There's no data for this year.</h1>
          )}
        </ExecutivesContainer>
      </>
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
