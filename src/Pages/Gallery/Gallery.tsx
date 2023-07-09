import styled from "styled-components";
import GalleryComponent from "./GalleryComponent";
import Footer from "../Home/Footer";

function Gallery() {
  return (
    <>
      <MainWrapper>
        <h1>Chessa Gallery</h1>
        <GalleryComponent />
      </MainWrapper>
      <Footer />
    </>
  );
}

const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  padding: 8rem 0.8rem;
  h1 {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export default Gallery;
