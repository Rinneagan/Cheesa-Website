import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import CheesaLogo from "../assets/cheesa-logo.png";
import { Button } from "../utils/ReusableStyles";
import { ToggleTheme } from "./ThemeWrapper";

function Navbar() {
  const { theme, handleTheme } = useContext(ToggleTheme);
  const isLight = theme.mode === "light";
  return (
    <NavBar>
      <MenuWrapper>
        <Logo>
          <Link to="/">
            <img src={CheesaLogo} alt="Cheesa Logo" />
          </Link>
        </Logo>
        <section>
          <button>Menu</button>
        </section>
      </MenuWrapper>
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
        <ThemeMode onClick={() => handleTheme()}>
          {isLight ? (
            <RiMoonLine size={32} color="inherit" />
          ) : (
            <RiSunLine size={32} color="inherit" />
          )}
        </ThemeMode>
        <Button>E-Library</Button>
      </ButtonWrapper>
    </NavBar>
  );
}

const NavBar = styled.nav`
  max-width: 100vw;
  height: 100vh;
  outline: 1px solid red;
  padding: 1rem;
  color: ${({ theme }) => theme.foreground};
  background-color: ${({ theme }) => theme.background};

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-block: 1rem;

    li {
      border-bottom: 1px solid ${({ theme }) => theme.foreground};
      padding-bottom: 0.4rem;

      &:first-child {
        padding-top: 1rem;
        border-top: 1px solid ${({ theme }) => theme.foreground};
      }

      a {
        color: inherit;
        display: block;
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
`;

const ThemeMode = styled.button`
  aspect-ratio: 1/1;
  width: fit-content;
  padding: 0.8rem;
  border-radius: 50%;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.foreground};
`;

export default Navbar;
