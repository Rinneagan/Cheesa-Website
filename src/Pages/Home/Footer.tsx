import styled from "styled-components";
function Footer() {
  return <Wrapper>Footer</Wrapper>;
}

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 5rem);
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.cheesaBlue : "#1E293B"};
`;

export default Footer;
