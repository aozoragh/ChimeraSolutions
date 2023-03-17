import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    
  }

  * {
    box-sizing: border-box;
    font-family: "NHaasGroteskDSPro-65Md";
    word-break: break-all;
  }

  @font-face {
    font-family: "NeueHaasDisplayBold";
    src: url("assets/fonts/NeueHaasDisplayBold.ttf");
  }
  @font-face {
    font-family: "NHaasGroteskDSPro-35XLt";
    src: url("assets/fonts/NHaasGroteskDSPro-35XLt.ttf");
  }
  @font-face {
    font-family: "NHaasGroteskDSPro-55Rg";
    src: url("assets/fonts/NHaasGroteskDSPro-55Rg.ttf");
  }
  @font-face {
    font-family: "NHaasGroteskDSPro-65Md";
    src: url("assets/fonts/NHaasGroteskDSPro-65Md.ttf");
  }

`;

export default GlobalStyle;
