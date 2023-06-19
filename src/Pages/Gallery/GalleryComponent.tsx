import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import { useState } from "react";
import closeIcon from "../../assets/close.png";
/**
 * External CSS to allow smooth
 * transition in a class
 */
import "./gallery.css";

function GalleryComponent() {
  // All set state
  const [modal, setModal] = useState(false);
  // Single clicked image state
  const [single, setSingle] = useState("");
  //   DUMMY_DATA
  const data = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1621905252472-943afaa20e20",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1573164713712-03790a178651",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1607706009771-de8808640bcf",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1649451844835-7f9d1dc6b0bf",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1573166613605-3b4dfcbf1268",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1573167659694-342d570ce45a",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1581089778245-3ce67677f718",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1565227748061-b5935bb64665",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    },
    {
      id: 10,
      image:
        "https://plus.unsplash.com/premium_photo-1661664754689-ac15147a2300",
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1573166953836-06864dc70a21",
    },
  ];

  //   Display Clicked Image
  function handleImage(imageSrc: string) {
    console.log(imageSrc);
    setModal(true);
    setSingle(imageSrc);
  }
  return (
    <>
      <Modal className={modal ? "modal open" : "modal"}>
        <img src={single} alt="Cheesa-Gallery" />
        <Close onClick={() => setModal(!true)}>
          <img src={closeIcon} alt="" />
        </Close>
      </Modal>
      <GalleryWrapper>
        {data.map((item) => (
          <GalleryCard key={item.id}>
            <img
              src={item.image}
              alt={item.image}
              style={{ width: "100%" }}
              onClick={() => handleImage(item.image)}
            />
          </GalleryCard>
        ))}
      </GalleryWrapper>
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
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;

  img {
    margin-top: 5.5rem;
    height: 85%;
    object-fit: cover;

    @media (max-width: ${BREAKPOINTS.MOBILE}) {
      max-height: 70%;
    }
  }
`;

export default GalleryComponent;
