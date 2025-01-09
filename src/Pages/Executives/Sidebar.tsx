import { useContext, useState } from "react";
import styled from "styled-components";
import Accordion from "../../components/Accordion";
import { motion } from "framer-motion";
import { SidebarHandlerContext } from "./ExecutivesLayout";

type SidebarProps = {
  isActive: boolean;
};

export default function SideBar({ isActive }: SidebarProps) {
  const [accordionIndex, setAccordionIndex] = useState<number | null>(null);
  const { YEARS } = useContext(SidebarHandlerContext);
  const sideBarStyles = {
    display: isActive ? "block" : "none",
  };
  const toggleAccordion = (item: string) => {
    const index = YEARS.indexOf(item);
    if (index === accordionIndex) {
      setAccordionIndex(null);
    } else {
      setAccordionIndex(YEARS.indexOf(item));
    }
  };

  return (
    <SideBarWrapper style={sideBarStyles} className="scrollbar">
      {YEARS.map((year) => (
        <Accordion key={year} handleOpenAccordion={toggleAccordion} item={year} isActive={accordionIndex === YEARS.indexOf(year)} />
      ))}
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled(motion.section)`
  width: 100%;
  height: calc(100vh - 3em);
  padding: 1rem;
  overflow-y: scroll;
  padding-top: 5em;
  position: fixed;
  top: 3em;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  background-color: inherit;
  border-right: 1px solid ${({ theme }) => (theme.mode === "light" ? "rgba(190, 190, 190, 0.842)" : "rgba(190, 190, 190, 0.164)")};
  @media (min-width: 50em) {
    position: sticky;
    top: 5em;
    height: calc(100vh - 5em);
    padding-top: 0;
    display: block !important;
  }
`;
