import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body::-webkit-scrollbar {
  width: 0.8rem;
}

body::-webkit-scrollbar-track {
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "rgb(243,245,247)" : "#1E293B"};
}

body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.background}; `;

export default GlobalStyle;
