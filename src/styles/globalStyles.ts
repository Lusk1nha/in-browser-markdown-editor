import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    height: 100%;
  }
`;

export default GlobalStyle;