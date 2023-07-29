import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { BREAKPOINTS, MainHeading, Mark } from "../../utils/ReusableStyles";
import Ezekiel from "../../assets/IMG_8853.jpg";
import Student2 from "../../assets/Gggg.jpg";
import Student3 from "../../assets/IMG_9763.jpg";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <Wrapper>
      <Container>
        <MainHeading>
          Reviews from <Mark>students.</Mark>{" "}
        </MainHeading>
        <motion.p>
          Here are testimonials from chemical engineering students about their
          experience with the association.
        </motion.p>

        <Marquee direction="right" speed={50}>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for professional development, including
              workshops on resume building, networking, and industry insights
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Ezekiel} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Student2} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for professional development, including
              workshops on resume building, networking, and industry insights
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Student3} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for professional development, including
              workshops on resume building, networking, and industry insights
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Student3} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for professional development, including
              workshops on resume building, networking, and industry insights
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Student3} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
        </Marquee>
        <Marquee speed={80}>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for professional development, including
              workshops on resume building, networking, and industry insights
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Ezekiel} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Student2} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for professional development, including
              workshops on resume building, networking, and industry insights
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Student3} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for professional development, including
              workshops on resume building, networking, and industry insights
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Student3} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
          <Card>
            <p className="article">
              Joining the chemical engineering students association has been a
              game-changer for me. The association has provided me with
              invaluable opportunities for professional development, including
              workshops on resume building, networking, and industry insights
            </p>
            <div className="student">
              <div className="img_box">
                <img src={Student3} alt="Student" />
              </div>
              <div className="student_details">
                <h3>Adu Gyamfi Sebastian</h3>
                <p>Student, Year 3</p>
              </div>
            </div>
          </Card>
        </Marquee>
      </Container>
    </Wrapper>
  );
}

const Card = styled.section`
  padding: 1.5rem;
  display: flex;
  border-radius: 0.8rem;
  aspect-ratio: 4/3;
  width: 20rem;
  margin: 1rem;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.background : "#1E293B"};
  flex-direction: column;
  outline: 1px solid
    ${({ theme }) => (theme.mode === "light" ? "#bbbbbb" : "#808080")};
  gap: 1rem;

  .article {
    text-align: left;
    opacity: 0.8;
    line-height: 1.5;
  }

  .student {
    display: flex;
    gap: 1rem;
    justify-content: flex-start;

    .img_box {
      aspect-ratio: 1/1;
      width: 5rem;
      border-radius: 50%;
      overflow: hidden;

      img {
        object-fit: cover;
        object-position: top;
        width: 100%;
        height: 100%;
      }
    }

    .student_details {
      align-self: flex-start;
      margin-block: auto;

      h3 {
        padding-bottom: 1rem;
      }

      p {
        color: ${({ theme }) =>
          theme.mode === "light" ? theme.cheesaBlue : "hsl(211, 100%, 65%)"};
      }
    }
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    .article {
      text-align: center;
    }

    .student {
      justify-content: center;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  padding-bottom: 4rem;
  h1 {
    text-align: center;
  }

  & > p {
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
    margin-inline: auto;
    padding-block: 1rem;
    line-height: 1.5;

    @media (min-width: ${BREAKPOINTS.LAPTOP}) {
      width: 25rem;
    }
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1400px;
  margin-inline: auto;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "rgb(250, 250, 250)" : theme.background};
  color: ${({ theme }) => theme.foreground};
`;

export default Testimonials;
