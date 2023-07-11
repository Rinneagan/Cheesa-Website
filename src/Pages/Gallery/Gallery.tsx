import styled from "styled-components";
import GalleryComponent from "./GalleryComponent";
import Footer from "../Home/Footer";

function Gallery() {
  return (
    <>
      <MainWrapper>
        <h1>CHEESA GALLERY</h1>
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
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    padding-block: 1rem;
  }
`;

export default Gallery;
