import styled from "styled-components";

type DataProps = {
  name: string;
  portfolio: string;
  img_url?: { asset: { url: string } };
};

function ExecutiveCard({ name, portfolio, img_url }: DataProps) {
  return (
    <CardWrapper>
      <div>
        <img src={img_url ? img_url.asset.url : ""} alt="Executive" />
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
    padding-block: 0.6rem;
  }
`;

const CardWrapper = styled.div`
  width: 15rem;
  height: 20rem;
  padding: 1rem;
  border-radius: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.background : "#1E293B"};
  outline: 1px solid
    ${({ theme }) => (theme.mode === "light" ? "#bbbbbb" : "#808080")};

  div {
    width: 100%;
    height: 75%;
    border-radius: 0.6rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default ExecutiveCard;
