import styled from "styled-components";
import Hero from "./Hero";
import Responsibility from "./Responsibility";

function Home() {
  return (
    <Wrapper>
      <Hero />
      <Responsibility />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
  position: absolute;
  top: 0;
`;

export default Home;
