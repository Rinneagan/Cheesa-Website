import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
type LecturerCard = {
  fullName: string;
  email: string;
  lecturerImage: { asset: { url: string } };
  description: string;
};
const Card = ({ lecturer }: { lecturer: LecturerCard }) => {
  return (
    <CardWrapper key={lecturer.fullName}>
      <InfoContainer>
        <img src={lecturer.lecturerImage.asset.url} alt="" />
        <TextBox>
          <h5>{lecturer.fullName}</h5>
          <a href={`mailto:${lecturer.email}`}>{lecturer.email}</a>
        </TextBox>
      </InfoContainer>
      <LectuerDesc>{lecturer.description}</LectuerDesc>
    </CardWrapper>
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
  line-height: 1.5;
  color: ${({ theme }) => theme.foreground};
`;


export default Card;
