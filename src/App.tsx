import styled, { ThemeProvider } from "styled-components";
import { ToggleTheme } from "./components/ThemeWrapper";
import { useContext } from "react";
function App() {
  const { theme, handleTheme } = useContext(ToggleTheme);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <h1>Hello World</h1>
        <button onClick={() => handleTheme()}>Change Theme</button>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
`;
export default App;
