import styled from "styled-components";
import Card from "./Card";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import Footer from "../Home/Footer";
import LecHeader from "./Header";
function Lecturers() {
  return (
    <>
      <Wrapper>
        <LecHeader />
        <LecturerCard>
          <Card />
        </LecturerCard>
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin-inline: auto;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.background};
`;

const LecturerCard = styled.div`
  display: grid;
  margin: 5rem 2rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* height: 70vh; */
  }
`;

export default Lecturers;
