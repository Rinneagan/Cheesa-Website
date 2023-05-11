import { HeaderStyles } from "../utils/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import CheesaLogo from "../assets/cheesa-logo.png";
import { Button } from "../utils/ReusableStyles";
import { ToggleTheme } from "./ThemeWrapper";
import { BREAKPOINTS } from "../utils/ReusableStyles";
import { motion } from "framer-motion";

type StyleProps = Partial<Record<"backgroundColor" | "color", string>>;
const NavLinks = ["About", "Lecturers", "Gallery", "Executives"];

const NavbarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { theme, handleTheme } = useContext(ToggleTheme);
  const [hasScrolled, setHasScrolled] = useState(false);

  const isLight = theme.mode === "light";

  const currentStyle = hasScrolled
    ? { backgroundColor: theme.background, color: theme.foreground }
    : HeaderStyles.hero;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { top } = document.documentElement.getBoundingClientRect();
      const height = window.innerHeight - 18 * 5;
      Math.abs(top) >= height ? setHasScrolled(true) : setHasScrolled(false);
    });

    return window.removeEventListener("scroll", () => {
      setHasScrolled(true);
    });
  });

  return (
    <HeaderWrapper
      backgroundColor={currentStyle.backgroundColor}
      color={currentStyle.color}
      className={hasScrolled ? "header" : "null"}
    >
      <MenuWrapper>
        <Logo>
          <Link to="/">
            <img src={CheesaLogo} alt="Cheesa Logo" />
          </Link>
        </Logo>
        <section className="menu">
          <button onClick={() => setNavIsOpen((prev) => !prev)}>
            {navIsOpen ? "Close" : "Menu"}
          </button>
        </section>
      </MenuWrapper>
      <NavBar
        animate={navIsOpen ? "open" : "closed"}
        variants={NavbarVariants}
        color={currentStyle.color}
      >
        <ul>
          {NavLinks.map((item) => {
            return (
              <motion.li key={item} whileTap={{ scale: 0.9 }}>
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </motion.li>
            );
          })}
        </ul>
        <ButtonWrapper>
          <ThemeMode onClick={handleTheme}>
            {isLight ? (
              <RiMoonLine size={24} color="inherit" />
            ) : (
              <RiSunLine size={24} color="inherit" />
            )}
          </ThemeMode>
          <EButton color={currentStyle.color}>E-Library</EButton>
        </ButtonWrapper>
      </NavBar>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header<StyleProps>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: ${({ color }) => color};
  height: 5rem;
  position: fixed;
  z-index: 100;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    height: fit-content;
    width: 100vw;
    flex-direction: row;
    gap: 1rem;
    padding-inline: 2rem;
    backdrop-filter: blur(20px);
  }
`;

const NavBar = styled(motion.nav)<StyleProps>`
  max-width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  height: 100vh;
  position: absolute;
  top: 5rem;
  width: 100vw;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    position: relative;
    top: 0;
    max-width: 100vw;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;
    transform: translateX(0) !important;
    background-color: transparent;
    backdrop-filter: blur(50px);
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-block: 1rem;

    @media (min-width: ${BREAKPOINTS.LAPTOP}) {
      width: fit-content;
      flex-direction: row;
      align-items: center;
      margin-inline: auto;
    }

    li {
      border-bottom: 1px solid ${({ theme }) => theme.foreground};
      padding-bottom: 0.4rem;
      @media (min-width: ${BREAKPOINTS.LAPTOP}) {
        border: none;
        padding-bottom: 0;
        color: ${({ color }) => color};
      }

      a {
        color: inherit;
        display: block;
        font-size: 1.2rem;
      }
    }
  }
`;

const MenuWrapper = styled.section`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: transparent;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    width: fit-content;
    .menu {
      display: none;
    }
  }
`;

const Logo = styled.section`
  aspect-ratio: 1/1;
  width: 3rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.background};
  height: fit-content;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    margin-block: auto;
    width: fit-content;
    gap: 1rem;
  }
`;

const ThemeMode = styled.button`
  aspect-ratio: 1/1;
  padding: 0.8rem;
  border-radius: 50%;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.foreground};

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
  }
`;

const EButton = styled(Button)<StyleProps>`
  color: ${({ theme }) => theme.foreground};
  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    color: ${({ color }) => color};
    border: 2px solid ${({ color }) => color};
  }
`;

export default Navbar;
