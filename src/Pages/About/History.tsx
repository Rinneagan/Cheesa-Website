import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import HODImage from "../../assets/becca-tapert-GnY_mW1Q6Xc-unsplash.jpg";

function History() {
  return (
    <HistoryWrapper>
      <ImageWrapper>
        <img src={HODImage} alt="" width={650} height={450} />
      </ImageWrapper>
      <TextBox>
        <h2>12 YEARS AS AN INSTITUTION</h2>
        <p>
          Welcome to the Department of Chemical Engineering as part of the
          largest and most prestigious university in sub-Saharan Africa. The
          Department of Chemical Engineering is a great place to be and to learn
          skills that can make the world better. We offer two undergraduate
          courses; BSc Chemical Engineering and BSc Petrochemical Engineering.
          We graduate over 100 chemical engineers and 70 petrochemical engineers
          a year who become entrepreneurs, researchers, leaders and builders of
          tomorrow in academia, government, Laboratories, mines and the
          petrochemical, pharmaceuticals, processing and environmental
          industries.
        </p>
      </TextBox>
    </HistoryWrapper>
  );
}

const HistoryWrapper = styled.div`
  width: 100vw;
  max-width: 1400px;
  height: 100vh;
  padding: 10rem 5rem;
  display: flex;
  align-items: start;
  justify-items: center;
  gap: 3rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    flex-direction: column;
    padding: 0 0 1rem 0;
  }
`;

const ImageWrapper = styled.section`
  margin-bottom: 2rem;

  img {
    border-radius: 30px;
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    margin: 0 auto;
    padding: 0 1rem;

    img {
      width: 100%;
      height: 65vh;
      border-radius: 10px;
    }
  }
`;

const TextBox = styled.section`
  width: 70%;
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.accent};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
  }
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    width: 87vw;
    margin: 0 auto;
    h2 {
      font-size: 1.5rem;
    }

    p {
      padding: 0;
      font-size: 1rem;
      text-align: left;
    }
  }
`;

export default History;
