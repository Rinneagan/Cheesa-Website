import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import { useContext, useState } from "react";
import closeIcon from "../../assets/close.png";
import { useFetch } from "../../hooks/useFetch";
import "./gallery.css";
import { Oval } from "react-loader-spinner";
import { ToggleTheme } from "../../components/ThemeWrapper";
import { useEffect } from "react";
import { GalleryResponse } from "../../types/types";
import { gallery_query } from "../../constants/page";

function GalleryComponent() {
  const [modal, setModal] = useState(false);
  const [single, setSingle] = useState("");
  const { data: Images, status } = useFetch<GalleryResponse>(gallery_query);

  function handleImage(imageSrc: string) {
    setModal(true);
    setSingle(imageSrc);
  }

  const { theme } = useContext(ToggleTheme);

  useEffect(() => {
    modal
      ? document.body.classList.add("hidden")
      : document.body.classList.remove("hidden");
  }, [modal]);

  return (
    <Wrapper>
      <Modal className={modal ? "modal open" : "modal"}>
        <img src={single} alt="Cheesa-Gallery" />
        <Close onClick={() => setModal(false)}>
          <img src={closeIcon} alt="close-icon" />
        </Close>
      </Modal>
      {status === "Fetching" ? (
        <Spinner>
          <Oval color={theme.foreground} secondaryColor={theme.cheesaBlue} />
        </Spinner>
      ) : (
        <GalleryWrapper>
          {Images &&
            Images.map((item) => (
              <GalleryCard key={item.image_alt}>
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
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const GalleryWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryCard = styled.div`
  width: 100%;
  height: 25rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 350ms ease;
    cursor: pointer;
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
    top: 5%;
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
    object-fit: contain;

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
