import styled from "styled-components";
import bg1 from "../public/assets/products/background.png";
import tv from "../public/assets/products/tv.png";
import play from "../public/assets/products/play.png";
import vision from "../public/assets/products/vision.png";

export const TeamContainer = styled.div`
  background-color: #e9e9e9;
  width: 100%;
  min-height: calc(100vh - 84px);
`;
export const TeamContext = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px 40px 20px;
`;
export const TeamHeadView = styled.div`
  border-bottom: 1px solid black;
`;
export const TeamHeadTxt = styled.span`
  font-size: 280px;
  font-weight: bold;
  letter-spacing: 0em;
  text-align: center;
  color: #000;

  @media screen and (max-width: 1280px) {
    font-size: 180px;
  }
  @media screen and (max-width: 768px) {
    font-size: 100px;
  }
  @media screen and (max-width: 425px) {
    font-size: 60px;
    line-height: 150px;
  }
`;
export const TeamSkillView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
export const DescribeTxt = styled.span`
  font-size: 70px;
  font-weight: bold;
  line-height: 119px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
  @media screen and (max-width: 1440px) {
    font-size: 50px;
    line-height: 80px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (max-width: 425px) {
    line-height: 40px;
  }
`;
export const SkillTxt = styled.span`
  font-size: 75px;
  font-weight: bold;
  line-height: 100px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  @media screen and (max-width: 1440px) {
    font-size: 50px;
    line-height: 80px;
  }
  @media screen and (max-width: 768px) {
    line-height: 80px;
  }
  @media screen and (max-width: 425px) {
    font-size: 32px;
    line-height: 50px;
  }
`;
export const LineTop = styled.div`
  border-top: 1px solid #fff;
  width: 100%;
  padding: 10px 5px;
  opacity: 0.75;
`;
export const PassContext = styled.div`
  background: linear-gradient(146.33deg, #839caf -8.18%, #193245 97.91%);
`;
export const PassContainer = styled.div`
  background-image: url(${bg1.src});
  background-size: cover;
`;
export const PassTxt = styled.div`
  font-size: 280px;
  font-weight: bold;

  color: #fff;
  @media screen and (max-width: 1280px) {
    font-size: 180px;
  }
  @media screen and (max-width: 768px) {
    font-size: 100px;
  }
  @media screen and (max-width: 425px) {
    font-size: 70px;
    line-height: 150px;
  }
`;
export const PassViewContainer = styled.div`
  width: 48%;
  margin-top: 90px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
  }
`;
export const PassView = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: space-between;
`;
export const PassViewNext = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const SubPassView = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PassSmallTxt = styled.span`
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  text-align: left;
  color: #fff;
  opacity: 0.75;
  margin-top: 30px;
`;

export const EmailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-top: 30px;
`;
export const EmailName = styled.div`
  font-weight: 400;
  font-size: 18px;
`;
export const EmailAddress = styled.div`
  font-weight: 500;
  font-size: 45px;
  margin-bottom: 20px;
`;
export const SliderArea = styled.div`
  max-width: 90%;
  margin: auto;
  height: 400px;
  background-color: green;
`;

export const PPETextArea = styled.div`
  width: 90%;
  margin: auto;
  font-weight: 500;
  font-size: 80px;
  line-height: 76px;
  padding: 100px 10px;
`;
export const LineBottom = styled.div`  
  border-bottom: 1px solid #fff;
  width: 90%;
  margin: auto;
  padding: 10px 5px;
  opacity: 0.75;
`;
export const PTZTextArea = styled.div`
  width: 90%;
  margin: auto;
  font-weight: 500;
  font-size: 45px;
  line-height: 46px;
  padding: 20px 0 0 0;
`;
export const VideoArea = styled.div`

  width: 80%;
  margin: 300px auto auto auto;
  padding-bottom: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & > img {
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  /* background: url(${tv.src}) no-repeat;
  background-size: cover; */
`;
export const PlayButton = styled.div`
width: 100%;
  img {
    width: 100%;
  }
`;

export const Video = styled.div`

position: absolute;
  width: 100%;
  height: calc(100% - 300px);
  top: 0;
  left: 0;
     padding: 2.8% 12% 6.5%;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const VideoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  h1 {
    font-family: 'Neue Haas Grotesk Display Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 150px;
    line-height: 179px;
    margin: 0;
    margin-bottom: 20px;
  }
`

export const SecondBackgroundArea = styled.div`
  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const ThirdSection = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  width: 90%;
`;
export const FirstText = styled.div`
  font-weight: 500;
  font-size: 80px;
  line-height: 76px;
`;
export const SecondText = styled.div`
  font-weight: 500;
  font-size: 45px;
`;
export const safadsfasdfasdf = styled.div`

`;