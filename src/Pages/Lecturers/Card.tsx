import styled from "styled-components";
import testImage from "../../assets/IMG_0874.jpg";
import { useState } from "react";
import { BREAKPOINTS } from "../../utils/ReusableStyles";

const Card = () => {
  const [lecturers, setLecturers] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      email: "testmail@knust.edu.gh",
      image: testImage,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.",
    },
    {
      id: 2,
      name: "Dr. John Doe",
      email: "testmail@knust.edu.gh",
      image: testImage,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.",
    },
    {
      id: 3,
      name: "Dr. John Doe",
      email: "testmail@knust.edu.gh",
      image: testImage,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.",
    },
    {
      id: 4,
      name: "Dr. John Doe",
      email: "testmail@knust.edu.gh",
      image: testImage,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.",
    },

    {
      id: 5,
      name: "Dr. John Doe",
      email: "testmail@knust.edu.gh",
      image: testImage,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.",
    },

    {
      id: 6,
      name: "Dr. John Doe",
      email: "testmail@knust.edu.gh",
      image: testImage,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.",
    },

    {
      id: 7,
      name: "Dr. John Doe",
      email: "testmail@knust.edu.gh",
      image: testImage,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.",
    },
    {
      id: 8,
      name: "Dr. John Doe",
      email: "testmail@knust.edu.gh",
      image: testImage,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum. et consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.et consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.et consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.et consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.et consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.et consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.et consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.et consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.",
    },
    {
      id: 9,
      name: "Dr. John Doe",
      email: "testmail@knust.edu.gh",
      image: testImage,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima optio molestiae est harum soluta repudiandae maxime fugit eaque earum.",
    },
  ]);
  return (
    <>
      {lecturers.map((lecturer) => (
        <CardWrapper key={lecturer.id}>
          <InfoContainer>
            <img src={lecturer.image} alt="" />
            <TextBox>
              <h5>{lecturer.name}</h5>
              <p>{lecturer.email}</p>
            </TextBox>
          </InfoContainer>
          <LectuerDesc>{lecturer.desc}</LectuerDesc>
        </CardWrapper>
      ))}
    </>
  );
};

const CardWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 30vw;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.background : "#1E293B"};
  outline: 1px solid
    ${({ theme }) => (theme.mode === "light" ? "#bbbbbb" : "#808080")};
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #66869b29;
    outline: none;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 1rem;
    max-width: 100vw;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 2rem;
  margin-bottom: 1.2rem;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: center;
    border-radius: 100%;
    box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.185);
    @media (max-width: ${BREAKPOINTS.MOBILE}) {
      width: 70px;
      height: 70px;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const TextBox = styled.div`
  margin-top: 1rem;

  h5 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Raleway";
    color: ${({ theme }) => theme.foreground};
  }
  p {
    color: ${({ theme }) => theme.foreground};
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 1px;
    transition: 0.3s ease;
    cursor: pointer;
  }
  p:hover {
    color: #3019c5;
  }
`;
const LectuerDesc = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.foreground};
`;

export default Card;
