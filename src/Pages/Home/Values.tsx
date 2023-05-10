import styled from "styled-components";
import ValuesImage from "../../assets/becca-tapert-GnY_mW1Q6Xc-unsplash.jpg";
import {
  BREAKPOINTS,
  Paragraph,
  Subheading,
  Tag,
} from "../../utils/ReusableStyles";
function Values() {
  return (
    <Wrapper>
      <section className="blob"></section>
      <Container>
        <ImageBox>
          <img src={ValuesImage} alt="image" />
        </ImageBox>
        <TextBox>
          <Tag>OUR VALUES</Tag>
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
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(200px);
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "hsla(0, 0%, 100%, .6)"
      : "hsla(212, 89%, 5%, .5)"};
  display: grid;
  gap: 1rem;
  padding-right: 2rem;
  place-items: center;
  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    grid-template-columns: repeat(2, 1fr);
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
  width: 80%;
  height: 80%;
  border-radius: 1rem;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
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
  width: 90%;
  color: ${({ theme }) => theme.foreground};
  h2 {
    font-size: 2.5rem;
    padding-block: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

export default Values;
