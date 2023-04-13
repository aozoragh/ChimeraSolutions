import styled from "styled-components";
import back from "../public/assets/about/background.png";

export const AboutContainer = styled.div`
  background-image: url(${back.src});
  background-size: cover;
  width: 100%;
  min-height: calc(100vh - 84px);
  padding: 0 0 30px 0;
`;
export const AboutContext = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const AboutHeadView = styled.div``;
export const AboutHeadTxt = styled.span`
  font-size: 320px;
  font-weight: bold;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 200px;
    line-height: 400px;
  }
  @media screen and (max-width: 768px) {
    font-size: 150px;
    line-height: 300px;
  }
  @media screen and (max-width: 425px) {
    font-size: 100px;
    line-height: 150px;
  }
`;
export const AboutContentView = styled.div``;
export const AboutContentTxt = styled.span`
  font-size: 95px;
  font-weight: 500;
  line-height: 119px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 60px;
    line-height: 70px;
  }
  @media screen and (max-width: 425px) {
    font-size: 36px;
    line-height: 60px;
  }
  @media screen and (max-width: 375px) {
    font-size: 24px;
    line-height: 38px;
  }
`;
