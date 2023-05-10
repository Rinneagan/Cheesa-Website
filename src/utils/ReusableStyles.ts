import styled from "styled-components";

export const BREAKPOINTS = {
  MOBILE: "30em",
  TABLET: "40em",
  LAPTOP: "50em",
  DESKTOP: "60em",
  LARGE_SCREENS: "70em",
};

export const Paragraph = styled.p`
  font-family: "Raleway";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.foreground};

  @media (min-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.2rem;
    padding-block: 1.2rem;
  }
`;

export const MainHeading = styled.h1`
  font-family: "Inter Tight";
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

export const Tag = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.accent};
`;

export const Button = styled.button`
  font-family: inherit;
  padding: 0.8rem 1rem;
  min-width: fit-content;
  border-radius: 2rem;
  color: ${({ theme }) => theme.foreground};
  border: 1px solid ${({ theme }) => theme.foreground};
  cursor: pointer;
  &:hover {
  }
`;

export const Subheading = styled.h3`
  font-family: "Inter";
  font-size: 1.4rem;
  font-weight: 700;
  padding-block: 1.5rem;
  color: ${({ theme }) => theme.foreground};

  @media (min-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 2rem;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    font-size: 3rem;
    padding-block: 1rem;
  }
`;
