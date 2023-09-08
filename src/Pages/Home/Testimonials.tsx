import styled from "styled-components";
import { BREAKPOINTS, MainHeading, Mark } from "../../utils/ReusableStyles";
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { TestimonialResponse } from "../../types/types";
import { testimonial_query } from "../../constants/page";
import { useContext, useState } from "react";
import { ToggleTheme } from "../../components/ThemeWrapper";
import { Oval } from "react-loader-spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperNext from "../../components/SwiperNext";
import SwiperPrevious from "../../components/SwiperPrevious";
import { ButtonWrapper } from "./Events";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Testimonials() {
  const { data: testimonials, status } =
    useFetch<TestimonialResponse>(testimonial_query);
  const [, setRerender] = useState(0);

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
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            autoplay={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            onSlideChange={(swiper) => setRerender(swiper.activeIndex)} // dont remove this i beg
          >
            {testimonials?.map((testimonial) => {
              return (
                <SwiperSlide key={testimonial.name}>
                  <Slide>
                    <TextBox>
                      <p>{testimonial.testimony}</p>
                    </TextBox>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <UserImage>
                        <img
                          src={testimonial.img_url.asset.url}
                          alt={`${testimonial.name}'s picture`}
                        />
                      </UserImage>
                      <StudentDetails>
                        <h1>{testimonial.name}</h1>
                        <p>
                          {testimonial.status}, {testimonial.year}
                        </p>
                      </StudentDetails>
                    </div>
                  </Slide>
                </SwiperSlide>
              );
            })}
            <ButtonWrapper>
              <div>
                <SwiperPrevious />
                <SwiperNext />
              </div>
            </ButtonWrapper>
          </Swiper>
        )}
      </Container>
    </Wrapper>
  );
}

const StudentDetails = styled.section`
  text-transform: capitalize;
  h1 {
    font-size: 1.2rem;
    text-align: left !important;
  }
  p {
    padding-block: 0.6rem;
    color: ${({ theme }) => theme.accent};
  }
`;

const UserImage = styled.div`
  width: 5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Slide = styled.section`
  width: 100%;
  height: fit-content;
  color: ${({ theme }) => theme.foreground};
  border-radius: 0.8rem;
  overflow: hidden;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.secondary};
`;

const TextBox = styled.div`
  padding: 1rem 0.4rem;
  line-height: 1.6;
  p {
    font-size: 1rem;
  }

  @media screen {
    p {
      font-size: 1.2rem;
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
