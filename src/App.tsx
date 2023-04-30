import styled, { ThemeProvider } from "styled-components";
import { ToggleTheme } from "./components/ThemeWrapper";
import { useContext } from "react";
import { MainHeading, Paragraph, Button } from "./utils/ReusableStyles";
function App() {
  const { theme, handleTheme } = useContext(ToggleTheme);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainHeading>Hello World</MainHeading>
        <Paragraph>
          Smile, for even in death you have become children of Thanos.
        </Paragraph>
        <Button onClick={() => handleTheme()}>Change Theme</Button>
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
