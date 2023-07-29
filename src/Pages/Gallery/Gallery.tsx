import styled from "styled-components";
import GalleryComponent from "./GalleryComponent";
import Footer from "../Home/Footer";
import {
  BREAKPOINTS,
  MainHeading,
  Paragraph,
  Mark,
} from "../../utils/ReusableStyles";
import { RiArrowDownDoubleLine } from "react-icons/ri";

type AboutWrapperProps = {
  backgroundImage: string;
};

function Gallery() {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <AboutWrapper
        backgroundImage={
          "https://ik.imagekit.io/i7gyrkpch/valsssss.jpg?updatedAt=1690668746543"
        }
      >
        <TextBox>
          <button onClick={scrollDown}>Scroll Down</button>
          <section>
            <RiArrowDownDoubleLine />
          </section>
        </TextBox>
      </AboutWrapper>
      <MainWrapper className="scrollbar">
        <div>
          <MainHeading>
            CHEESA <Mark>Gallery</Mark>
          </MainHeading>
          <Paragraph>
            Our gallery showcases captivating images and snapshots capturing the
            essence of our association's activities, events, and achievements.
            From insightful laboratory experiments to captivating field trips,
            this collection offers a glimpse into the diverse and exciting
            experiences shared by our members.
          </Paragraph>
        </div>
        <GalleryComponent />
      </MainWrapper>
      <Footer />
    </>
  );
}

const AboutWrapper = styled.div<AboutWrapperProps>`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  margin-inline: auto;
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
  height: calc(100vh - 10rem);
  display: grid;
  gap: 1rem;
  place-content: center;

  section {
    width: fit-content;
    margin-inline: auto;
  }
  button {
    padding: 0.8rem 1.2rem;
    border: 1px solid #fff;
    cursor: pointer;
    transition: all 300ms ease-in;

    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
`;

const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  padding: 2rem 0.8rem;
  width: 100vw;
  max-width: 1440px;
  margin-inline: auto;
  div {
    h1 {
      text-align: center;
      padding-block: 1rem;
    }

    p {
      text-align: center;
      width: 100%;
      margin-block: 1rem;
      margin-inline: auto;

      @media (min-width: ${BREAKPOINTS.LAPTOP}) {
        width: 70%;
      }
    }
  }
`;

export default Gallery;
