import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import { useContext, useState } from "react";
import closeIcon from "../../assets/close.png";
import { useFetchGallery } from "../../hooks/useFetch";
/**
 * External CSS to allow smooth
 * transition in a class
 */
import "./gallery.css";
import { Oval } from "react-loader-spinner";
import { ToggleTheme } from "../../components/ThemeWrapper";

function GalleryComponent() {
  const [modal, setModal] = useState(false);
  const [single, setSingle] = useState("");
  const { data, status } = useFetchGallery();

  //   Display Clicked Image
  function handleImage(imageSrc: string) {
    setModal(true);
    setSingle(imageSrc);
  }

  const { theme } = useContext(ToggleTheme);

  return (
    <>
      <Modal className={modal ? "modal open" : "modal"}>
        <img src={single} alt="Cheesa-Gallery" />
        <Close onClick={() => setModal(!true)}>
          <img src={closeIcon} alt="close-icon" />
        </Close>
      </Modal>
      {status === "Fetching" ? (
        <Spinner>
          <Oval color={theme.foreground} />
        </Spinner>
      ) : (
        <GalleryWrapper>
          {data &&
            data.map((item) => (
              <GalleryCard key={item._id}>
                <img
                  src={item.image_url.asset.url}
                  alt={item.image_alt}
                  style={{ width: "100%" }}
                  onClick={() => handleImage(item.image_url.asset.url)}
                />
              </GalleryCard>
            ))}
        </GalleryWrapper>
      )}
    </>
  );
}

const GalleryWrapper = styled.div`
  margin-top: 1rem;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 24px;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
  }
  img {
    height: 70%;
    object-fit: cover;
  }

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
`;

const GalleryCard = styled.div`
  img {
    -webkit-transition: all 350ms ease;
    transition: 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;
  }
  img:hover {
    filter: opacity(0.7);
  }
`;

const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 40px;
  width: 2%;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    top: 0px;
    right: 20px;
    width: 7%;
  }

  img {
    background-color: #fff;
    padding: 0.4rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
      transform: rotate(50deg);
      color: white;
    }
  }
`;

const Modal = styled.div`
  width: 100%;

  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  img {
    height: 85%;
    object-fit: cover;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
      max-height: 70%;
    }
  }
`;
const Spinner = styled.div`
  width: 100%;
  height: 100%;
  margin: 5rem auto;
  display: grid;
  place-content: center;
  color: ${({ theme }) => theme.foreground};
`;

export default GalleryComponent;
