import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { BREAKPOINTS, MainHeading, Mark } from "../../utils/ReusableStyles";
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { TestimonialResponse } from "../../types/types";
import { testimonial_query } from "../../constants/page";
import { useContext } from "react";
import { ToggleTheme } from "../../components/ThemeWrapper";
import { Oval } from "react-loader-spinner";

function Testimonials() {
  const { data: testimonials, status } =
    useFetch<TestimonialResponse>(testimonial_query);
  const { theme } = useContext(ToggleTheme);

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
        {status === "Fetching" ? (
          <Spinner>
            <Oval color={theme.foreground} secondaryColor={theme.cheesaBlue} />
          </Spinner>
        ) : (
          <Marquee direction="right" speed={20}>
            {testimonials &&
              testimonials.map((testimonial) => (
                <Card key={testimonial.name}>
                  <p className="article">{testimonial.testimony}</p>
                  <div className="student">
                    <div className="img_box">
                      <img
                        src={testimonial.img_url.asset.url}
                        alt={testimonial.status}
                      />
                    </div>
                    <div className="student_details">
                      <h3>{testimonial.name}</h3>
                      <p>
                        {testimonial.status}, {testimonial.year}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
          </Marquee>
        )}
      </Container>
    </Wrapper>
  );
}

const Card = styled.section`
  padding: 1.5rem;
  display: flex;
  border-radius: 0.8rem;
  aspect-ratio: 1/1;
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
      text-transform: capitalize;
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

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  margin: 5rem auto;
  display: grid;
  place-content: center;
  color: ${({ theme }) => theme.foreground};
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
