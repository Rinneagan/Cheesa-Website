import styled from "styled-components";
import CardImage from "../assets/Gggg.jpg";

type DataProps = {
  name: string;
  portfolio: string;
  img_url?: string;
};

function ExecutiveCard({ name, portfolio, img_url }: DataProps) {
  return (
    <CardWrapper>
      <div>
        <img src={CardImage} alt="Executive" />
      </div>
      <section>
        <h2>{name}</h2>
        <p>{portfolio}</p>
      </section>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  height: 20rem;
  width: 15rem;
  flex-shrink: 0;
  padding: 1rem;
  position: relative;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "#e7e7e7" : "#1E293B"};
  border-radius: 1rem;

  div {
    height: 85%;
    border-radius: 0.4rem;
    overflow: hidden;
    margin-bottom: auto;

    img {
      object-fit: cover;
      object-position: top;
      width: 100%;
      height: 100%;
      transform: scale(1);
      transition: transform 300ms ease-in;
      &:hover {
        object-position: top;
        transform: scale(1.2);
      }
    }
  }

  h2 {
    /* font-size: 1.4rem; */
    font-weight: 300;
    color: ${({ theme }) => theme.foreground};
    margin-top: 0;
    position: absolute;
    bottom: 1rem;
  }

  p {
  }
`;

// const CardWrapper = styled.div`
//   aspect-ratio: 4/3;
//   width: 15rem;
//   padding: 1rem;
//   border-radius: 0.8rem;
//   background-color: ${({ theme }) =>
//     theme.mode === "light" ? theme.background : "#1E293B"};
//   outline: 1px solid
//     ${({ theme }) => (theme.mode === "light" ? "#bbbbbb" : "#808080")};
//   h2 {
//     font-size: 1.2rem;
//   }
// `;

export default ExecutiveCard;
