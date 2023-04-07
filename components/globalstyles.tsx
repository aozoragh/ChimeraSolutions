import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    
  }

  * {
    box-sizing: border-box;
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif !important;
  }

  .swiper-wrapper {
    width: 59vw !important;
  }

  .swiper {
    width: 90vw;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .latest-project-slide {
    width: 59vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;

export default GlobalStyle;
