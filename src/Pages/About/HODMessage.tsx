import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
// import { BREAKPOINTS } from "../../utils/ReusableStyles";
// import HODImage from "../../assets/viktor-kiryanov-lAcYPEiau0U-unsplash.jpg";

function HODMessage() {
  return (
    <HODWrapper>
      <TextBox>
        <h2>Goodwill message from the Head of Department</h2>
      </TextBox>
      <VideoWrapper>
        <iframe
          width={650}
          height={380}
          src="https://www.youtube.com/embed/C0DPdy98e4c"
          title="TEST VIDEO"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </VideoWrapper>
      <TextBox>
        <p>Ing. Prof. Nana Yaw Asiedu, PE, MGhIE, MAIChE, AMIChemE</p>
      </TextBox>
    </HODWrapper>
  );
}

const HODWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
`;
const TextBox = styled.section`
  text-align: center;

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 0;
    font-family: "Raleway";
  }
  p {
    margin: 1.5rem 0;
    font-size: 16px;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    h2 {
      font-size: 1.5rem;
      padding-block: 1rem;
    }
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  iframe {
    border-radius: 10px;
    object-fit: cover;
  }
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    iframe {
      width: 100%;
      height: 40vh;
    }
  }
`;

export default HODMessage;
