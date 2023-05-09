import styled from "styled-components";
import { Paragraph } from "../../utils/ReusableStyles";
import { useEffect } from "react";
import { MainHeading, Tag } from "../../utils/ReusableStyles";
import "swiper/swiper.min.css";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import "swiper/css";
import "swiper/css/effect-cards";

function Responsibility() {
  return (
    <Wrapper>
      <TextBox>
        <Tag>WHAT WE DO?</Tag>
        <MainHeading>Empowering our members.</MainHeading>
        <Paragraph>
          We organize engaging workshops, informative seminars that delve into
          various facets of chemical engineering, from process design and
          optimization to sustainable practices.
        </Paragraph>
      </TextBox>
      <SwiperContainer>
        <Card>Card 1</Card>
        <Card className="card-two">Card 2</Card>
      </SwiperContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 5rem);
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  display: grid;
  gap: 1rem;
  padding-inline: 1rem;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    grid-template-columns: 50% auto;
  }
`;

const TextBox = styled.section`
  padding: 1rem;
  margin-block: auto;
`;
const SwiperContainer = styled.section`
  border: 1px solid lime;
  padding-inline: 1rem;
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  height: 25rem;
  width: 20rem;
  border: 1px solid blue;
`;

export default Responsibility;
