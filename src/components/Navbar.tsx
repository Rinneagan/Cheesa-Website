import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import CheesaLogo from "../assets/cheesa-logo.png";
import { Button } from "../utils/ReusableStyles";
import { ToggleTheme } from "./ThemeWrapper";
import { BREAKPOINTS } from "../utils/ReusableStyles";

function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { theme, handleTheme } = useContext(ToggleTheme);
  const isLight = theme.mode === "light";
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <Logo>
          <Link to="/">
            <img src={CheesaLogo} alt="Cheesa Logo" />
          </Link>
        </Logo>
        <section className="menu">
          <button onClick={() => setNavIsOpen((prev) => !prev)}>Menu</button>
        </section>
      </MenuWrapper>
      <NavBar
        style={{ transform: navIsOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/lecturers">Lecturers</Link>
          </li>
          <li>
            <Link to="/executives">Exectives</Link>
          </li>
        </ul>
        <ButtonWrapper>
          <ThemeMode onClick={handleTheme}>
            {isLight ? (
              <RiMoonLine size={24} color="inherit" />
            ) : (
              <RiSunLine size={24} color="inherit" />
            )}
          </ThemeMode>
          <Button>E-Library</Button>
        </ButtonWrapper>
      </NavBar>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    flex-direction: row;
    gap: 1rem;
  }
`;

const NavBar = styled.nav`
  max-width: 100vw;
  height: 100vh;
  padding: 1rem;
  color: ${({ theme }) => theme.foreground};
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;
    transform: translateX(0) !important;
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

export default Navbar;
