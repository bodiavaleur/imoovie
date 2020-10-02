import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.primaryColor};
    font-family: 'Nunito', sans-serif;
  }

  html {
      font-size: 16px;
      background: #333;
  }

  html,body, #root {
      height: 100%;
  }
`;
