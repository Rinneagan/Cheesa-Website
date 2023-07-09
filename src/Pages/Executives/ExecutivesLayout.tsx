import { useState, createContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RiCloseLine, RiMenuUnfoldLine } from "react-icons/ri";
import SideBar from "./Sidebar";
import useFetch from "../../hooks/useFetch";

type sideBarContextProps = {
  toggleSideBar: () => void;
  YEARS: string[];
};
export const SidebarHandlerContext = createContext({} as sideBarContextProps);
const YEARS = ["2023", "2022"];

function ExecutivesLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { data, status } = useFetch();
  const toggleSideBar = () => {
    setOpenSidebar((isOpen) => !isOpen);
  };

  const menuStyles = {
    justifyContent: openSidebar ? "flex-end" : "flex-start",
  };

  return (
    <SidebarHandlerContext.Provider value={{ toggleSideBar, YEARS }}>
      <Wrapper>
        <ResourcesWrapper>
          <MenuWrapper onClick={toggleSideBar} style={menuStyles}>
            {openSidebar ? (
              <RiCloseLine size={32} color="inherit" />
            ) : (
              <RiMenuUnfoldLine size={32} color="inherit" />
            )}
          </MenuWrapper>
          <SideBar isActive={openSidebar} />
          <OutletContainer>
            <Outlet context={{ data, status }} />
          </OutletContainer>
        </ResourcesWrapper>
      </Wrapper>
    </SidebarHandlerContext.Provider>
  );
}

const Wrapper = styled.section``;

const ResourcesWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin-inline: auto;
  color: ${({ theme }) => theme.foreground};
  background-color: ${({ theme }) => theme.background};
  height: fit-content;
  display: grid;
  @media (min-width: 50em) {
    grid-template-columns: 30% auto;
  }
`;

const MenuWrapper = styled(motion.button)`
  display: flex;
  position: sticky;
  width: 100vw;
  height: 3em;
  top: 0em;
  align-items: center;
  z-index: 10;
  margin-block: auto;
  border: none;
  background: none;
  color: ${({ theme }) => theme.foreground};
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.background};

  @media (min-width: 50em) {
    display: none;
  }
`;

const OutletContainer = styled.div`
  padding: 1em;
  width: 100%;
  margin-inline: auto;
  display: grid;
  @media (min-width: 50em) {
    margin-top: 5em;
    width: 90%;
  }
`;

export default ExecutivesLayout;
