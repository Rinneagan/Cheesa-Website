import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";

function ExecutivesIndex() {
  return (
    <Wrapper>
      <h1>Goodwill message from Executives</h1>
      <p>
        Welcome to CHEESA, the Chemical Engineering Students' Association! We
        are honored to lead this incredible community of passionate individuals
        on a journey of academic excellence, personal growth, and positive
        impact. As a family, we celebrate diversity, nurture talents, and
        embrace the power of unity. Through mentorship, networking, and industry
        collaborations, we provide opportunities for your development. Together,
        let's dream big, challenge conventions, and make a lasting impact in our
        field and society. We express our gratitude to our members and dedicated
        team for their unwavering support. Join us on this incredible journey as
        we shape the future of chemical engineering together. Welcome to the
        CHEESA family!
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0.6;
  h1 {
    font-size: 2rem;
    line-height: 1.5;
    padding-block: 2rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default ExecutivesIndex;
