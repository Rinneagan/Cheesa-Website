import styled from "styled-components";
import BackroundImage from "../../assets/crystal-kwok-XUEdfpPIhXg-unsplash.jpg";
import { MainHeading } from "../../utils/ReusableStyles";

type HeroWrapperProps = {
  backgroundImage: string;
};
function Home() {
  return (
    <HeroWrapper backgroundImage={BackroundImage}>
      <TextBox>
        <MainHeading>Chemical Engineering Students' Association</MainHeading>
      </TextBox>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div<HeroWrapperProps>`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #000000b3, #000000dc),
    url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-attachment: fixed;
`;

const TextBox = styled.section`
  padding: 1rem;
  margin-block: auto;
  height: 100%;
  display: grid;
  place-items: center;

  h1 {
    text-align: center;
    color: #fff;
  }
`;

export default Home;
