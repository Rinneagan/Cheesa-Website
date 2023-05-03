import styled from "styled-components";

const BREAKPOINTS = {
  MOBILE: "30em",
  TABLET: "40em",
  LAPTOP: "50em",
  DESKTOP: "60em",
  LARGE_SCREENS: "70em",
};

export const Paragraph = styled.p`
  font-family: "Jost";
  font-size: 1rem;
  font-weight: 300;
  padding-block: 1rem;
  color: ${({ theme }) => theme.foreground};

  @media (min-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.2rem;
    padding-block: 1.2rem;
  }
`;

export const MainHeading = styled.h1`
  font-family: "Inter";
  font-size: 2rem;
  font-weight: 700;
  padding-block: 1.5rem;
  color: ${({ theme }) => theme.foreground};

  @media (min-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 3rem;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    font-size: 4rem;
    padding-block: 2rem;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  padding: 0.8rem 1rem;
  border-radius: 2rem;
  color: ${({ theme }) => theme.foreground};
  border: 1px solid ${({ theme }) => theme.foreground};
  cursor: pointer;
  &:hover {
  }
`;
