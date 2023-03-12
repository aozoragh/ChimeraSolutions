import styled from "styled-components";
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
export const TeamHeadView = styled.div``;
export const TeamHeadTxt = styled.span`
  font-size: 280px;
  font-weight: bold;
  letter-spacing: 0em;
  text-align: center;

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
  color: #e9e9e9;
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
export const Line = styled.hr`
  border: 1px solid ${(props) => (props.color ? props.color : "black")};
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const PassContext = styled.div`
  background: linear-gradient(146.33deg, #839caf -8.18%, #193245 97.91%);
`;
export const PassContainer = styled.div`
  background-image: url(${vision.src});
  background-size: cover;
`;
export const PassTxt = styled.div`
  font-size: 280px;
  font-weight: bold;

  color: #e9e9e9;
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
  line-height: 60px;
  text-align: left;
  color: rgba(255, 255, 255, 0.75);
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 50px;
  }
`;
