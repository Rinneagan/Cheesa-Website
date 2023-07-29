import styled from "styled-components";
import { BREAKPOINTS, Subheading } from "../utils/ReusableStyles";
import { Paragraph } from "../utils/ReusableStyles";
import { RiCloseLine } from "react-icons/ri";
import { EventsFields } from "../types/types";

type ModalProps = {
  handleToggleModal: () => void;
  element: EventsFields | null;
};

function Modal({ element, handleToggleModal }: ModalProps) {
  if (!element) return;
  return (
    <ModalWrapper>
      <Menu onClick={handleToggleModal}>
        <RiCloseLine size={16} color="inherit" />
      </Menu>
      <ContentBox>
        <ImageWrapper>
          <img src={element.eventImage.asset.url} alt="" />
        </ImageWrapper>
        <TextBox className="scrollbar">
          <Subheading>{element.eventName.toUpperCase()}</Subheading>
          <Paragraph>{element.eventDescription}</Paragraph>
        </TextBox>
      </ContentBox>
    </ModalWrapper>
  );
}

const Menu = styled.button`
  padding: 0.8rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  color: #333;
  right: 5%;
  top: 1%;
  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    top: 5%;
  }
`;

const ImageWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  border-radius: 0.8rem;
  overflow: hidden;
  place-self: start;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const TextBox = styled.section`
  padding: 1rem;
  height: 100%;
  overflow-y: scroll;
`;

const ContentBox = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.background : theme.secondary};
  display: grid;
  border-radius: 1.8rem;
  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    width: 80vw;
    padding: 1rem;
    gap: 1rem;
    grid-template-columns: 40% auto;
  }
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "#a1a1a17e" : "hsla(212, 89%, 5%, .5)"};
  backdrop-filter: blur(8px);
`;

export default Modal;
