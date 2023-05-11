import styled from "styled-components";
import { Paragraph } from "../../utils/ReusableStyles";
import { MainHeading, Tag } from "../../utils/ReusableStyles";
import { motion } from "framer-motion";
import FirstImage from "../../assets/viktor-kiryanov-lAcYPEiau0U-unsplash.jpg";
import SecondImage from "../../assets/ivo-lukacovic-IJTX8aDDMa0-unsplash.jpg";
import ThirdImage from "../../assets/victor-2PJMDIgK9EA-unsplash.jpg";

import { BREAKPOINTS } from "../../utils/ReusableStyles";

const TextBoxVariants = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const TextItemsVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

function Responsibility() {
  return (
    <Wrapper>
      <TextBox
        variants={TextBoxVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "all" }}
      >
        <Tag variants={TextItemsVariants}>WHAT WE DO?</Tag>
        <MainHeading variants={TextItemsVariants}>
          Empowering our <mark>members.</mark>
        </MainHeading>
        <Paragraph variants={TextItemsVariants}>
          We organize engaging workshops, informative seminars that delve into
          various facets of chemical engineering, from process design and
          optimization to sustainable practices.
        </Paragraph>
      </TextBox>
      <SwiperContainer>
        <SliderWrapper drag="x" dragConstraints={{ left: -400, right: 0 }}>
          <Card>
            <div className="img__container">
              <img src={FirstImage} alt="First Image" />
            </div>
            <h3>Soft skills training</h3>
          </Card>
          <Card>
            <div className="img__container">
              <img src={SecondImage} alt="First Image" />
            </div>
            <h3>Online Bootcamps</h3>
          </Card>
          <Card>
            <div className="img__container">
              <img src={ThirdImage} alt="First Image" />
            </div>
            <h3>Extra-curricular activities</h3>
          </Card>
        </SliderWrapper>
      </SwiperContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  display: grid;
  gap: 1rem;

  mark {
    color: ${({ theme }) =>
      theme.mode === "light" ? theme.cheesaBlue : "hsl(211, 100%, 65%)"};
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    padding-inline: 1rem;
    grid-template-columns: 50% 50%;
    place-content: center;
  }
`;

const TextBox = styled(motion.section)`
  padding: 1rem;
  margin-block: auto;
`;

const SliderWrapper = styled(motion.div)`
  display: flex;
  width: fit-content;
  gap: 1rem;
  justify-content: flex-start;
  padding-inline: 1rem;
  padding: 1rem;
`;

const SwiperContainer = styled.section`
  overflow: hidden;
  height: 100%;
`;

const Card = styled.div`
  height: 25rem;
  width: 20rem;
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
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.foreground};
    margin-top: 0;
    position: absolute;
    bottom: 1rem;
  }
`;

export default Responsibility;
