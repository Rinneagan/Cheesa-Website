import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
type AboutWrapperProps = {
  backgroundImage: string;
};

function AboutHeader() {
  return (
    <AboutWrapper
      backgroundImage={
        "https://ik.imagekit.io/i7gyrkpch/_MG_0338_7tCDZyoH8.jpg?updatedAt=1689078179478"
      }
    >
      <TextBox>
        <h2>Welcome to the Chemical Engineering Students' Association</h2>
        <p>Kwame Nkrumah University of Science & Technology</p>
      </TextBox>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div<AboutWrapperProps>`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  padding-block: 3rem;
  background-image: linear-gradient(to bottom, #000000b3, #000000dc),
    url(${({ backgroundImage }) => backgroundImage});
  background-position: top;
  background-size: cover;
`;

const TextBox = styled.section`
  width: 100%;
  color: white;
  z-index: 999;
  text-align: center;

  h2 {
    font-size: 4.5rem;
    font-weight: 500;
    padding: 0 10rem;
  }
  p {
    padding-top: 1rem;
    font-size: 1.5rem;
    font-weight: 800;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    h2 {
      font-size: 1.8rem;
      padding: 0 0.5rem;
    }
  }
`;

export default AboutHeader;
