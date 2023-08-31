import styled from "styled-components";
import Squad from "./Squad";
import { BREAKPOINTS, Mark, MainHeading } from "../../utils/ReusableStyles";
import Footer from "../Home/Footer";

function Team() {
  return (
    <Wrapper>
      <MainHeading className="heading-wai">
        Meet the <Mark>Team</Mark>
      </MainHeading>
      <Desc>
        CHEESA Website development is led by a dedicated team studying and
        working part-time at <Mark className="company">SlightlyTechie</Mark> and
        <Mark className="company"> InteliTech. </Mark>
      </Desc>
      <Squad />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  width: 100dvw;
  max-width: 1400px;
  margin: 0 auto;
  .heading-wai {
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  padding: 0 20rem;
  text-align: center;
  line-height: 1.2;
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 0;
  }
  .company {
    font-weight: bold;
  }
`;

export default Team;
