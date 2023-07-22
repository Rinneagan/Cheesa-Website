import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import { motion } from "framer-motion";
type HeroWrapperProps = {
  backgroundImage: string;
};

const HeadingVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function Home() {
  return (
    <HeroWrapper backgroundImage="https://ik.imagekit.io/i7gyrkpch/_MG_0356_eCxDKul6b.jpg?updatedAt=1689078157904">
      <TextBox>
        <motion.h1 variants={HeadingVariants} initial="hidden" animate="show">
          Chemical Engineering Students' Association
        </motion.h1>
      </TextBox>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div<HeroWrapperProps>`
  width: 100%;
  height: calc(100vh - 5rem);
  background-image: linear-gradient(to bottom, #00000057, #000000dc),
    url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
`;

const TextBox = styled.section`
  padding: 1rem;
  height: 100%;
  display: grid;
  place-items: end;

  h1 {
    text-align: left;
    color: #fff;
    font-size: 4rem;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    h1 {
      font-size: 7rem;
    }
  }
`;

export default Home;
