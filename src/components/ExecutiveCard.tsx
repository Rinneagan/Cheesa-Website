import styled from "styled-components";
import { BREAKPOINTS } from "../utils/ReusableStyles";

type DataProps = {
  name: string;
  portfolio: string;
  img_url?: { asset: { url: string } };
};

function ExecutiveCard({ name, portfolio, img_url }: DataProps) {
  return (
    <CardWrapper>
      <div>
        <img src={img_url ? img_url.asset.url : ""} alt={`${name}'s picture`} />
      </div>
      <CardData>
        <h2>{name}</h2>
        <p>{portfolio}</p>
      </CardData>
    </CardWrapper>
  );
}

const CardData = styled.section`
  margin-top: 1rem;
  h2 {
    padding-bottom: 0.2rem;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.4rem;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem;
  border-radius: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.background : "#1E293B"};
  outline: 1px solid
    ${({ theme }) => (theme.mode === "light" ? "#bbbbbb" : "#808080")};

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    width: 15rem !important;
    height: 22rem;
  }

  div {
    width: 100%;
    height: 75%;
    border-radius: 0.6rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default ExecutiveCard;
