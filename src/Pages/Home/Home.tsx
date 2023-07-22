import styled from "styled-components";
import Hero from "./Hero";
import Responsibility from "./Responsibility";
import Values from "./Values";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Events from "./Events";

function Home() {
  return (
    <Wrapper>
      <Hero />
      <Responsibility />
      <Values />
      <Events />
      <Testimonials />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin-inline: auto;
`;

export default Home;
