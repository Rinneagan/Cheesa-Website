import { ReactNode, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SidebarHandlerContext } from "../Pages/Executives/ExecutivesLayout";

type ListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  renderEmpty?: ReactNode;
  year: string;
};

function RenderSidebarList({
  data,
  renderEmpty = <h1>Empty list</h1>,
  year,
}: ListProps) {
  const { toggleSideBar } = useContext(SidebarHandlerContext);

  if (!data.length) renderEmpty;

  return (
    <AccordionItem style={{ paddingInline: "0" }}>
      {data.map((item: typeof data) => (
        <ListItem key={item}>
          <Link
            to={`${year}-${item.replace(/\s/gi, "-").toLowerCase()}`}
            onClick={() => toggleSideBar()}
          >
            {item}
          </Link>
        </ListItem>
      ))}
    </AccordionItem>
  );
}

const AccordionItem = styled(motion.ul)`
  position: relative;
  z-index: 1;
`;

const ListItem = styled.li`
  position: relative;
  z-index: 1000;
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding: 0.5em;
    margin-block: 0.3em;
    border-radius: 0.4em;
    color: ${({ theme }) =>
      theme.mode === "light" ? theme.foreground : theme.secondary500};
    &:hover {
      background-color: ${({ theme }) => theme.secondary};
    }
  }
`;

export default RenderSidebarList;
