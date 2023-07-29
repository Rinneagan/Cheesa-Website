import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import { useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./gallery.css";
import { Oval } from "react-loader-spinner";
import { ToggleTheme } from "../../components/ThemeWrapper";
import { GalleryResponse } from "../../types/types";
import { gallery_query } from "../../constants/page";

function GalleryComponent() {
  const { data: Images, status } = useFetch<GalleryResponse>(gallery_query);

  const { theme } = useContext(ToggleTheme);

  return (
    <Wrapper>
      {status === "Fetching" ? (
        <Spinner>
          <Oval color={theme.foreground} secondaryColor={theme.cheesaBlue} />
        </Spinner>
      ) : (
        <GalleryWrapper>
          {Images?.map((image, index) => (
            <a href={image.link} target="_blank" key={index}>
              <GalleryCard>
                <EventImageContainer>
                  <img src={image.image_url.asset.url} alt={image.image_alt} />
                </EventImageContainer>
                <InfoContainer>
                  <TextBox>
                    <h5>{image.image_alt ? image.image_alt : "Not Set Yet"}</h5>
                  </TextBox>
                </InfoContainer>
              </GalleryCard>
            </a>
          ))}
        </GalleryWrapper>
      )}
    </Wrapper>
  );
}

const EventImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 300ms ease-in;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Wrapper = styled.div``;

const GalleryWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryCard = styled.div`
  width: 100%;
  height: 25rem;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.background : "#1E293B"};
  outline: 1px solid
    ${({ theme }) => (theme.mode === "light" ? "#bbbbbb" : "#808080")};
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #c2c2c229;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 350ms ease;
    cursor: pointer;
  }
  img:hover {
    filter: opacity(0.7);
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
const InfoContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 2rem;
  padding: 1rem;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: center;
    @media (max-width: ${BREAKPOINTS.MOBILE}) {
      width: 70px;
      height: 70px;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const TextBox = styled.div`
  margin-top: 1rem;
`;

export default GalleryComponent;
