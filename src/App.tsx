import { ThemeProvider } from "styled-components";
import { ToggleTheme } from "./components/ThemeWrapper";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ExecutivesLayout from "./Pages/Executives/ExecutivesLayout";
import Lecturers from "./Pages/Lecturers/Lecturers";
import Navbar from "./components/Navbar";
import Gallery from "./Pages/Gallery/Gallery";
import GlobalStyle from "./components/GlobalStyles";
import ExecutiveDetail from "./Pages/Executives/ExecutiveDetail";
import ExecutivesIndex from "./Pages/Executives/ExecutivesIndex";

function App() {
  const { theme } = useContext(ToggleTheme);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/lecturers" element={<Lecturers />} />
          <Route path="/executives" element={<ExecutivesLayout />}>
            <Route path=":year" element={<ExecutiveDetail />} />
            {/* <Route path=":year" index element={<ExecutivesIndex />} /> */}
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
