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
  font-weight: 700;
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

  color: transparent;
  -webkit-text-stroke: 2px #fff;
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  @media screen and (max-width: 425px) {
    font-size: 25px;
    line-height: 30px;
  }
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
  /* height: 700px; */
`;

export const PPETextArea = styled.div`
  width: 90%;
  margin: auto;
  font-weight: 500;
  font-size: 80px;
  line-height: 76px;
  padding: 100px 10px;
  @media screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 53px;
    line-height: 57px;
    padding: 50px 10px;
  }
  @media screen and (max-width: 425px) {
    font-size: 37px;
    line-height: 45px;
  }
  @media screen and (max-width: 320px)
  {
    font-size: 32px;
    line-height: 35px;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 37px;
    line-height: 40px;
  }
  @media screen and (max-width: 320px)
  {
    font-size: 25px;
    line-height: 30px;
  }  
`;
export const VideoArea = styled.div`
  width: 80%;
  margin: 16vw auto auto auto;
  padding-bottom: 16vw;
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
  z-index: 9999;
  width: 100%;
  height: calc(100% - 16vw);
  top: 0;
  left: 0;
  padding: 2.8% 12% 6.5%;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VideoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  h1 {
    font-family: "Neue Haas Grotesk Display Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 150px;
    line-height: 179px;
    margin: 0;
    margin-bottom: 20px;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
  }
`;

export const SecondBackgroundArea = styled.div`
  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const ThirdSection = styled.div`
  margin-top: -4px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(146.33deg, #839caf -8.18%, #193245 97.91%);
  background-blend-mode: darken;
  padding: 20vw 0;
`;
export const Container = styled.div`
  width: 90%;
`;
export const FirstText = styled.div`
  font-weight: 500;
  font-size: 80px;
  line-height: 76px;
  @media screen and (max-width: 768px) {
    font-size: 63px;
    line-height: 62px;
  }
  @media screen and (max-width: 425px) {
    font-size: 48px;
    line-height: 55px;
  }
`;
export const SecondText = styled.div`
  font-weight: 500;
  font-size: 45px;
  @media screen and (max-width: 425px) {
    font-size: 36px;
  }  
  @media screen and (max-width: 375px) {
    font-size: 31px;
  }  
  @media screen and (max-width: 320px) {
    font-size: 27px;
  }  
`;
export const LineBottomNew = styled.div`
  border-bottom: 1px solid #fff;
  padding: 30px 5px 10px 0;
  opacity: 0.75;
  margin-bottom: 10px;
`;

export const ThirdBackgroundArea = styled.div`
  margin-bottom: -5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const OurPartnersText = styled.div`
  font-weight: 800;
  font-size: 150px;
  @media screen and (max-width: 768px) {
    font-size: 19vw;
  } 
`;
export const WhoText = styled.div`
  border-top: 1px solid #fff;
  font-weight: 700;
  font-size: 80px;
  width: 45%;
  p {
    margin: 0 !important;
  }
  @media screen and (max-width: 425px) {
    font-size: 18.8vw;
  } 
`;
export const SubContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const PartnerGallery = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 30px;
  img {
    object-fit: cover;
    width: 90%;
  }
`;
export const FifthSection = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20vw 0;
`;
export const AskUsArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 13vw;
  }
`;
export const AskUsText = styled.div`
  font-weight: 500;
  font-size: 20px;
`;
export const AskUsDesc = styled.div`
  font-weight: 700;
  font-size: 60px;
  p {
    margin: 0 !important;
  }
  @media screen and (max-width: 640px) {
    font-size: 9vw;
  }
`;
export const ContactDesc = styled.div`
  font-weight: 700;
  font-size: 60px;
  @media screen and (max-width: 800px) {
    font-size: 7.5vw;
  }
`;
export const ContactArea = styled.div`
  background: url("/assets/products/bg2.png") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 40px;
  padding: 150px 0;
  @media screen and (max-width: 1024px) {
    * {
      width: 80% !important;
    }
  }
  * {
    width: 50%;
    padding-left: 20px;
    font-size: 25px;
    border: none;
  }
  input {
    border: none !important;
    outline: none !important;
  }
  button {
    background-color: #4c4c4c;
    border: none;
    color: #fff;
  }
  button:hover {
    background-color: #747474;
    cursor: pointer;
  }
  input,
  button {
    height: 40px;
  }
  textarea {
    padding-top: 10px;
    border: none !important;
    outline: none !important;
  }
`;
export const safadsfasdfasdf = styled.div``;
