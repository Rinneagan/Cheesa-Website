import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import { motion } from "framer-motion";
import { TextBoxVariants, TextItemsVariants } from "../Home/Responsibility";

function AboutStatements() {
  return (
    <StatementWrapper>
      <TextWrapper
        variants={TextBoxVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
      >
        <TextBox variants={TextItemsVariants}>
          <h2>Vision</h2>
          <p>
            The vision of the Department of Chemical Engineering at KNUST is to
            achieve nationally, regionally and internationally recognized
            undergraduate Chemical and Petrochemical Engineering programmes for
            Development; producing high caliber graduates with knowledge and
            expertise to support the industrial and socio-economic development
            of Ghana in particular and Africa as a whole.
          </p>
        </TextBox>
        <TextBox variants={TextItemsVariants}>
          <h2>Mission</h2>
          <p>
            Our mission is to produce an environment for teaching and research
            in the area of chemical and petrochemical enginering and
            entrepreneuship training for the industrial and socio-economic
            development of Ghana in particular and Africa as a wholeWe aim to
            develop engineers who will be successful in their careers, able to
            address technological and societal challenges and prepare them for
            both life-long learning and further advance studies.We also offer
            service to community; we are opened to all people of Ghana and
            positioned to attract scholars and industrialists from international
            communities
          </p>
        </TextBox>
      </TextWrapper>
    </StatementWrapper>
  );
}

const StatementWrapper = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 5rem;
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    width: 100%;
    padding: 0 1rem 5rem 1rem;
  }
`;

const TextWrapper = styled(motion.div)`
  width: 100%;
  padding: 1rem;
  display: grid;
  gap: 1rem;
  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;
const TextBox = styled(motion.section)`
  width: 100%;
  margin-top: 2rem;
  outline: 1px solid
    ${({ theme }) => (theme.mode === "light" ? "#bbbbbb" : "#808080")};
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.background : "#1E293B"};
  border-radius: 0.8rem;
  padding: 1rem;

  h2 {
    font-size: 2.5rem;
    padding-bottom: 2rem;
    font-weight: 400;
    color: ${({ theme }) =>
      theme.mode === "light" ? theme.cheesaBlue : theme.accent};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
  }
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    margin: 0 auto;
    h2 {
      font-size: 1.5rem;
      margin-top: 2rem;
    }

    p {
      padding: 0;
      font-size: 1rem;
      text-align: left;
    }
  }
`;
export default AboutStatements;
