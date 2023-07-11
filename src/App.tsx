import styled, { ThemeProvider } from "styled-components";
import { ToggleTheme } from "./components/ThemeWrapper";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ExecutivesLayout from "./Pages/Executives/ExecutivesLayout";
import Lecturers from "./Pages/Lecturers/Lecturers";
import Navbar from "./components/Navbar";
import Gallery from "./Pages/Gallery/Gallery";
import ExecutiveDetail from "./Pages/Executives/ExecutiveDetail";
import ExecutivesIndex from "./Pages/Executives/ExecutivesIndex";

function App() {
  const { theme } = useContext(ToggleTheme);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/lecturers" element={<Lecturers />} />
            <Route path="/executives" element={<ExecutivesLayout />}>
              <Route path=":year" element={<ExecutiveDetail />} />
              <Route index element={<ExecutivesIndex />} />
            </Route>
          </Routes>
        </Main>
      </ThemeProvider>
    </Router>
  );
}

const Main = styled.main`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

export default App;
