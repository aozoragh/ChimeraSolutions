import styled from "styled-components";

import contactBg from '../public/assets/contact/contactBg.png'
export const ContactContainer = styled.div`
  width: 100vw;
  height: 170vh;
  background: url(${contactBg.src}) no-repeat;
  background-size: cover;
  color: #fff;
  padding: 100px 120px;
  
  @media screen and (max-width: 768px) {
    padding: 100px 90px;
    height: 140vh;
  }
  @media screen and (max-width: 425px) {
    padding: 70px 30px;
    height: 95vh;
  }
`;

export const ContactText = styled.div`
  font-size: 350px;
  font-weight: bold; 
  border-bottom: 2px solid #fff;
  @media screen and (max-width: 1440px) {
    letter-spacing: -10px;
    font-size: 310px;
  }
  @media screen and (max-width: 1024px) {
    letter-spacing: -5px;
    font-size: 200px;
  }
  @media screen and (max-width: 768px) {
    letter-spacing: -5px;
    font-size: 160px;
  }
  @media screen and (max-width: 425px) {
    letter-spacing: -5px;
    font-size: 95px;
  }
  @media screen and (max-width: 375px) {
    letter-spacing: -5px;
    font-size: 90px;
  }
  @media screen and (max-width: 325px) {
    letter-spacing: -5px;
    font-size: 75px;
  }
`;
export const FindUsOnText = styled.div`
  font-size: 20px;
  padding: 30px 0 50px 0;
  opacity: 0.9;
  font-weight: lighter !important;
`;
export const LinkSet = styled.div`
  div:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;
export const LinkText = styled.div`
  font-size: 100px;
  font-weight: bold; 

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
  @media screen and (max-width: 425px) {
    font-size: 50px;
    font-weight: 500;
  }
  @media screen and (max-width: 325px) {
    font-size: 45px;
    font-weight: 500;
  }
`;
export const MailText = styled.div`
  padding-top: 150px;
  font-size: 30px;
  opacity: 0.8;
  
  @media screen and (max-width: 768px) {
    padding-top: 110px;
  }
  @media screen and (max-width: 425px) {
    padding-top: 60px;
  }
  @media screen and (max-width: 375px) {
    font-size: 28px;
  }
  @media screen and (max-width: 325px) {
    font-size: 23px;
  }
`;