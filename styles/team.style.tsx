import styled from "styled-components";

export const TeamContainer = styled.div`
  background-color: #e9e9e9;
  width: 100%;
  min-height: calc(100vh - 84px);
  padding: 0 20px;
`;
export const TeamContext = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
export const TeamHeadView = styled.div``;
export const TeamHeadTxt = styled.span`
  font-size: 320px;
  font-weight: bold;
  letter-spacing: 0em;
  text-align: center;
  color: #000;

  @media screen and (max-width: 1024px) {
    font-size: 200px;
  }
  @media screen and (max-width: 768px) {
    font-size: 150px;
  }
  @media screen and (max-width: 425px) {
    font-size: 100px;
    line-height: 150px;
  }
`;
export const TeamSkillView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
export const LinkTxt = styled.a`
  font-size: 80px;
  font-weight: bold;
  line-height: 119px;
  letter-spacing: 0em;
  color: #000;
  text-align: left;
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    font-size: 50px;
    line-height: 80px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 60px;
  }
  @media screen and (max-width: 425px) {
    line-height: 40px;
  }
  :hover {
    color: grey;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
export const SkillTxt = styled.span`
  font-size: 65px;
  font-weight: bold;
  line-height: 100px;
  letter-spacing: 0em;
  color: #000;
  text-align: left;
  @media screen and (max-width: 1440px) {
    font-size: 50px;
    line-height: 80px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 60px;
  }
  @media screen and (max-width: 425px) {
    line-height: 40px;
  }
`;
export const Line = styled.hr`
  border: 1px solid black;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const TeamDescriontoion = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OurText = styled.span`
  font-size: 30px;
  font-weight: 350;
  letter-spacing: 0em;
  text-align: left;
  color: #000;

  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 40px;
  }
`;
export const OurTDescribe = styled.span`
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 0em;
  text-align: left;
  line-height: 50px;
  color: #000;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;
export const TeamSection = styled.div`
  margin-top: 200px;
  @media screen and (max-width: 1024px) {
    margin-top: 100px;
  }
`;
export const TeamAvatar = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    img {
      width: 240px;
      height: 300px;
    }
  }
`;
export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LinkView = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  margin-top: 88px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    margin-top: 48px;
  }
`;
export const LanguageTxt = styled.span`
  font-family: "Neue Haas Grotesk Display Pro";
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
