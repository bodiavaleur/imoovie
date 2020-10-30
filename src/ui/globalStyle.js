import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { breakpoints } from "./breakpoints";

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
      background: ${theme.mainBg};
  }

  

  .pagination {
    display: flex;
    width: 100%;
    max-width: 20rem;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 5px;
    list-style: none;
    background: ${theme.darkBg};

    &__page {
      
    }
  }

  @media screen and (${breakpoints.mobile}) {
    html {
      font-size: 13px;
    }
  }
`;
