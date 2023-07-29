import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
type AboutWrapperProps = {
  backgroundImage: string;
};

function LecHeader() {
  return (
    <HeaderWrapper backgroundImage="https://ik.imagekit.io/i7gyrkpch/_MG_8789.jpg?updatedAt=1690666790368">
      <TextBox>
        <h2>Our Noble Lecturers</h2>
      </TextBox>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div<AboutWrapperProps>`
  height: 60vh;
  width: 100vw;
  max-width: 1400px;
  background-image: linear-gradient(to bottom, #000000b3, #000000dc),
    url(${({ backgroundImage }) => backgroundImage});
  background-position: top;
  background-size: cover;
  position: relative;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    height: 30vh;
  }
`;

const TextBox = styled.section`
  width: 100%;
  color: white;
  margin: 10rem auto;
  position: absolute;
  top: 1px;
  z-index: 999;
  text-align: center;
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    margin: 7rem auto;
  }

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

export default LecHeader;
