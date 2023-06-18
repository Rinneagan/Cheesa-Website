import { Data } from "../../data/data";
import useFormatParams from "../../hooks/useFormatParams";
import ExecutiveCard from "../../components/ExecutiveCard";
import styled from "styled-components";

function ExecutiveDetail() {
  const { activeYear, committee } = useFormatParams();
  const activeExecutives = Data[activeYear];
  const activeCommittee = activeExecutives[committee];

  return (
    <ExecutivesContainer>
      {activeCommittee.map((item) => {
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
