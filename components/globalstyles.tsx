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
    width: 44vw;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media screen and (max-width: 767px) {
      width: 90vw;
    }
  }

  .overflow-wrap-anywhere {
    overflow-wrap: anywhere;
  }
  .landing-slider-container {
    width: 100% !important;
  }

`;

export default GlobalStyle;
