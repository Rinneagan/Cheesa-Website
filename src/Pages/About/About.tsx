import styled from "styled-components";
import AboutHeader from "./AboutHeader";
import Footer from "../Home/Footer";
import HODMessage from "./HODMessage";
import History from "./History";
import AboutStatements from "./AboutStatements";

function About() {
  return (
    <Wrapper>
      <AboutHeader />
      <HODMessage />
      <History />
      <AboutStatements />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin-inline: auto;
  height: fit-content;
`;
export default About;
