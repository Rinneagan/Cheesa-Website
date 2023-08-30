import styled from "styled-components";
import Squad from "./Squad";
import { BREAKPOINTS, Mark } from "../../utils/ReusableStyles";
import Footer from "../Home/Footer";

function Team() {
  return (
    <Wrapper>
      <Heading>
        Meet the <Mark>Team</Mark>
      </Heading>
      <Desc>
        Cheesa Website development is led by a dedicated team studying and
        working part-time at <Mark>SlightlyTechie.</Mark>
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
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  margin: 2.5rem 0 1rem 0;
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
`;

export default Team;
