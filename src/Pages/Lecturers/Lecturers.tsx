import styled from "styled-components";
import Card from "./Card";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import Footer from "../Home/Footer";
import LecHeader from "./Header";
import { useFetchLecturers } from "../../hooks/useFetch";
import { Oval } from "react-loader-spinner";
import { useContext } from "react";
import { ToggleTheme } from "../../components/ThemeWrapper";

function Lecturers() {
  const { data, status } = useFetchLecturers();
  const { theme } = useContext(ToggleTheme);

  return (
    <Wrapper>
      <LecHeader />
      <LecturerCard>
        {status === "Fetching" && (
          <Spinner>
            <Oval color={theme.foreground} secondaryColor={theme.cheesaBlue} />
          </Spinner>
        )}
        {status === "Success" &&
          data.map((item) => {
            return <Card key={item.fullName} lecturer={item} />;
          })}
      </LecturerCard>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin-inline: auto;
  background-color: ${({ theme }) => theme.background};
`;

const LecturerCard = styled.div`
  display: grid;
  padding: 2rem 0rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Spinner = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  color: ${({ theme }) => theme.foreground};
`;

export default Lecturers;
