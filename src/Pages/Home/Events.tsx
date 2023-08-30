import { useContext, useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styled from "styled-components";
import {
  BREAKPOINTS,
  Paragraph,
  MainHeading,
  Mark,
} from "../../utils/ReusableStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNext from "../../components/SwiperNext";
import SwiperPrevious from "../../components/SwiperPrevious";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useFetch } from "../../hooks/useFetch";
import { Oval } from "react-loader-spinner";
import { ToggleTheme } from "../../components/ThemeWrapper";
import { events_query } from "../../constants/page";
import { EventsResponse, EventsFields } from "../../types/types";
import Modal from "../../components/Modal";
import { sortEventsByCategory } from "../../utils/utils";

type EventTagProps = {
  category: "upcoming" | "completed" | "ongoing";
};

function Events() {
  const { status, data: Events } = useFetch<EventsResponse>(events_query);
  const { theme } = useContext(ToggleTheme);
  const [, setRerender] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentElement, setCurrentElement] = useState<EventsFields | null>(
    null
  );

  const sortedEvents = Events && sortEventsByCategory(Events);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("hidden");
      return;
    }
    document.body.classList.remove("hidden");
  });

  const toggleModal = () => {
    setShowModal((isShown) => !isShown);
  };

  return (
    <Wrapper>
      {showModal && (
        <Modal element={currentElement} handleToggleModal={toggleModal} />
      )}
      <Message>
        <MainHeading>
          Don't miss out on any <Mark>event.</Mark>
        </MainHeading>
        <Paragraph>
          Explore the dynamic world of chemical engineering and be part of a
          vibrant community. Stay tuned for upcoming events and get ready for an
          enriching experience with us!
        </Paragraph>
      </Message>
      {status === "Fetching" && (
        <Spinner>
          <Oval color={theme.foreground} secondaryColor={theme.cheesaBlue} />
        </Spinner>
      )}

      {status === "Success" && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            "@1.0": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          onSlideChange={(swiper) => setRerender(swiper.activeIndex)} // weird hmm
        >
          {sortedEvents?.map((event) => {
            return (
              <SwiperSlide
                key={event.eventName}
                onClick={() => {
                  setCurrentElement(event);
                  toggleModal();
                }}
                style={{ cursor: "pointer" }}
              >
                <Slide>
                  <EventImageContainer>
                    <img
                      src={event.eventImage.asset.url}
                      alt={`${event.eventName}'s picture`}
                    />
                  </EventImageContainer>
                  <EventTag category={event.eventCategory}>
                    <div>
                      <h3>{event.eventCategory}</h3>
                    </div>
                    <p>{event.eventName}</p>
                  </EventTag>
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
    </Wrapper>
  );
}

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  color: ${({ theme }) => theme.foreground};
`;

const ButtonWrapper = styled.div`
  div {
    margin-left: auto;
    width: fit-content;
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin-left: auto;
  }
`;

const Message = styled.div`
  text-align: center;
  padding: 1rem;

  h1 {
    padding-block: 1rem;
  }

  p {
    width: 100%;
    margin-inline: auto;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    padding: 2rem;
    p {
      width: 50%;
    }
  }
`;

const EventTag = styled.div<EventTagProps>`
  margin-block: auto;
  font-family: "Raleway";
  h3 {
    background-color: ${({ category, theme }) => {
      if (category) {
        if (category.toLowerCase() === "upcoming") return "rgb(168, 101, 255)";
        if (category.toLowerCase() === "completed") return "rgb(83, 255, 169)";
        if (category.toLowerCase() === "ongoing") return theme.accent;
      }
    }};
    width: fit-content;
    margin-block: auto;
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
    border-radius: 0.8rem;
    text-transform: uppercase;
    color: #1d1d1d;
  }

  p {
    padding-block: 0.6rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1400px;
  margin-inline: auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  padding: 1rem;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    padding-inline: 1rem;
  }
`;

const EventImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 300ms ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Slide = styled.div`
  aspect-ratio: 1/1;
  height: 26rem;
  width: 100%;
  color: ${({ theme }) => theme.foreground};
  border-radius: 0.8rem;
  overflow: hidden;
  padding: 0.6rem;
  display: grid;
  gap: 0.5rem;
  grid-template-rows: 80% 20%;
  background-color: ${({ theme }) => theme.secondary};
`;

export default Events;
