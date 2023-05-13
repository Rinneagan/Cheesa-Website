import styled from "styled-components";
import ValuesImage from "../../assets/becca-tapert-GnY_mW1Q6Xc-unsplash.jpg";
import { BREAKPOINTS, Tag } from "../../utils/ReusableStyles";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

function Values() {
  const { scrollY } = useScroll();
  const baseY = useSpring(scrollY);
  const scale = useTransform(baseY, [1, 1000], [1, 1.5], {
    clamp: false,
  });

  const TextListVariants = {
    hidden: {
      scale: 0.5,
    },
    show: {
      scale: 1,
    },
  };

  return (
    <Wrapper>
      <section className="blob"></section>
      <Container>
        <ImageBox>
          <motion.img style={{ scale }} src={ValuesImage} alt="image" />
        </ImageBox>
        <TextBox>
          <Tag
            variants={TextListVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            OUR VALUES
          </Tag>
          <CardsContainer>
            <Card>
              <h2>Academic Excellence</h2>
              <p>
                We strive to provide our members with a supportive and
                stimulating environment that fosters their intellectual growth
                and development
              </p>
            </Card>
            <Card>
              <h2>Collaboration</h2>
              <p>
                We promote a collaborative culture where members can work
                together on projects, research, and other activities. We believe
                that teamwork and collaboration are keys to success in the
                chemical engineering field.
              </p>
            </Card>
          </CardsContainer>
        </TextBox>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1400px;
  min-height: 100vh;
  margin-inline: auto;
  position: relative;
  background-color: ${({ theme }) => theme.background};

  @media (width > ${BREAKPOINTS.LAPTOP}) {
    height: 100vh;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(150px);
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "hsla(0, 0%, 100%, .8)"
      : "hsla(212, 89%, 5%, .7)"};
  display: grid;
  gap: 1rem;
  padding: 0.6rem;
  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    place-items: center;
    padding-right: 2rem;
    grid-template-columns: repeat(2, 1fr);
    backdrop-filter: blur(120px);
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    height: 30vh;
    width: 80%;
    height: 80%;
  }
`;

const CardsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const Card = styled.section`
  width: 100%;
  color: ${({ theme }) => theme.foreground};
  h2 {
    font-size: 1.8rem;
    padding-block: 0.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export default Values;
