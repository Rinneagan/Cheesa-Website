import styled from "styled-components";
import { Paragraph } from "../../utils/ReusableStyles";
import { MainHeading, Tag } from "../../utils/ReusableStyles";
import { motion } from "framer-motion";
import { useRef } from "react";

import { BREAKPOINTS } from "../../utils/ReusableStyles";

export const TextBoxVariants = {
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

export const TextItemsVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

function Responsibility() {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <TextBox
        variants={TextBoxVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
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
      <SwiperContainer ref={constraintRef}>
        <SliderWrapper drag="x" dragConstraints={constraintRef}>
          <Card>
            <div className="img__container">
              <img
                src="https://ik.imagekit.io/i7gyrkpch/lab_ONSjAgjtV.jpg?updatedAt=1689078137499"
                alt="Lab Sessions"
              />
            </div>
            <h3>Lab Sessions</h3>
          </Card>
          <Card>
            <div className="img__container">
              <img
                src="https://ik.imagekit.io/i7gyrkpch/onlineee_Fl7QYU2ER.jpg?updatedAt=1689078137829"
                alt="Online Bootcamps"
              />
            </div>
            <h3>Online Bootcamps</h3>
          </Card>
          <Card>
            <div>
              <img
                src="https://ik.imagekit.io/i7gyrkpch/extrculrr_RB-DasN8G.jpg?updatedAt=1689078176332"
                alt="Extra Curricular Activities"
              />
            </div>
            <h3>Extra-curricular activities</h3>
          </Card>
          <Card>
            <div>
              <img
                src="https://ik.imagekit.io/i7gyrkpch/field_trip_4qTj0YLx4.jpg?updatedAt=1689078138348"
                alt="Field Trips"
              />
            </div>
            <h3>Field Trips</h3>
          </Card>
          <Card>
            <div>
              <img
                src="https://ik.imagekit.io/i7gyrkpch/team_EKeWTPaa7.jpg?updatedAt=1689078138895"
                alt="Sports"
              />
            </div>
            <h3>Sports</h3>
          </Card>
        </SliderWrapper>
      </SwiperContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1400px;
  margin-inline: auto;
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
  width: 100vw;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    width: 100%;
  }
`;

const Card = styled(motion.div)`
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
