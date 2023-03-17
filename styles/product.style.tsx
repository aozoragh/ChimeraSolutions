import styled from "styled-components";
import bg1 from "../public/assets/products/background.png";
import tv from "../public/assets/products/tv.png";

export const TeamContainer = styled.div`
  background-color: #e9e9e9;
  width: 100%;
  min-height: calc(100vh - 84px);
`;
export const TeamContext = styled.div`
  max-width: 90%;
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
  -webkit-text-stroke: 1px #fff;
  color: transparent;
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
    font-size: 30px;
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
  @media screen and (max-width: 1024px) {
    font-size: 70px;
  }
  @media screen and (max-width: 768px) {
    font-size: 55px;
  }
  @media screen and (max-width: 425px) {
    font-size: 35px;
    line-height: 50px;
  }
  @media screen and (max-width: 320px) {
    font-size: 33px;
    line-height: 45px;
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
  @media screen and (max-width: 425px) {
    font-size: 33px;
    line-height: 40px;
  }
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
  
    @media screen and (max-width: 1024px) {
      margin: 200px auto auto auto;
    }
    @media screen and (max-width: 768px) {
      margin: 150px auto auto auto;
    }
    @media screen and (max-width: 425px) {
      margin: 100px auto auto auto;
    }

  /* background: url(${tv.src}) no-repeat;
  background-size: cover; */
`;
export const PlayButton = styled.div`
width: 100%;
  img {
    width: 100%;
    
    @media screen and (max-width: 1024px) {
      width: 70%;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 768px) {
      width: 50%;
      margin-top: -40px;
    }
    @media screen and (max-width: 425px) {
      width: 25%;
      margin-top: -50px;
    }
    @media screen and (max-width: 320px) {
      width: 25%;
      margin-top: -70px;
    }
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
  text-align: center;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 150px;
    line-height: 179px;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    margin: 0;
    margin-bottom: 20px;
    
    @media screen and (max-width: 1024px) {
      font-size: 130px;
      margin-bottom: 0px;
    }
    @media screen and (max-width: 768px) {
      font-size: 90px;
    }
    @media screen and (max-width: 425px) {
      font-size: 60px;
      margin-top: -50px;
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(146.33deg, #839CAF -8.18%, #193245 97.91%);
  background-blend-mode: darken;
  padding: 25vh 0 0 0;
  margin-top: -10px;
`;
export const ThirdSection2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(146.33deg, #839CAF -8.18%, #193245 97.91%);
  background-blend-mode: darken;
  padding: 25vh 0;
  margin-top: -10px;
    @media screen and (max-width: 425px) {
      padding: 10vh 0;
    }
`;
export const Container = styled.div`
  width: 90%;
`;
export const FirstText = styled.div`
  font-weight: 500;
  font-size: 80px;
  line-height: 76px;
  
    @media screen and (max-width: 1024px) {
      font-size: 70px;
    }
    @media screen and (max-width: 425px) {
      font-size:60px;
      line-height: 60px;
    }
    @media screen and (max-width: 375px) {
      font-size:48px;
      line-height: 55px;
    }
`;
export const SecondText = styled.div`
  font-weight: 500;
  font-size: 45px;
    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
    @media screen and (max-width: 425px) {
      font-size: 35px;
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
  font-weight: 500;
  font-size: 150px;
    @media screen and (max-width: 768px) {
      font-size: 120px;
    }
    @media screen and (max-width: 425px) {
      font-size: 60px;
    }
    @media screen and (max-width: 320px) {
      font-size: 50px;
    }
`;
export const WhoText = styled.div` 
  border-top: 1px solid #fff;
  font-weight: 500;
  font-size: 80px;
  width: 45%;
    @media screen and (max-width: 768px) {
      font-size: 60px;
    }
    @media screen and (max-width: 425px) {
      font-size: 35px;
    }
  p {
    margin: 0 !important;
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
  padding: 25vh 0;
`;
export const AskUsArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 100px;
`;
export const AskUsText = styled.div`
  font-weight: 500;
  font-size: 20px;
`;
export const AskUsDesc = styled.div`
  font-weight: 500;
  font-size: 60px;
  word-break: normal !important;
  p {
    margin: 0 !important;
  }
  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;
export const ContactDesc = styled.div`
  font-weight: 500;
  font-size: 60px;

  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;
export const ContactArea = styled.div`
  background: url("/assets/products/bg2.png") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  row-gap: 40px;
  padding: 150px 0;
  
  * {
    width: 50%;
    padding-left: 20px;
    font-size: 25px;
    border: none;
    
    @media screen and (max-width: 768px) {
      width: 70%;
    }
    @media screen and (max-width: 425px) {
      width: 90%;
    }
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
  input, button {
    height: 40px;
  }
  textarea {
    padding-top: 10px;
  }
`;
export const safadsfasdfasdf = styled.div`

`;