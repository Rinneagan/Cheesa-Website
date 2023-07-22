import styled from "styled-components";
import GalleryComponent from "./GalleryComponent";
import Footer from "../Home/Footer";
import {
  BREAKPOINTS,
  MainHeading,
  Paragraph,
  Mark,
} from "../../utils/ReusableStyles";

function Gallery() {
  return (
    <>
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
