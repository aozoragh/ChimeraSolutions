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
    height: 135vh;
  }
  @media screen and (max-width: 680px) {
    height: 125vh;
  }
  @media screen and (max-width: 630px) {
    height: 115vh;
  }
  @media screen and (max-width: 540px) {
    height: 105vh;
  }
  @media screen and (max-width: 425px) {
    padding: 70px 30px;
    height: 85vh;
  }
`;

export const ContactText = styled.div`
  font-size: 350px;
  font-weight: bold; 
  border-bottom: 2px solid #fff;
  @media screen and (max-width: 1536px) {
    font-size: 20vw;
  }
  @media screen and (max-width: 690px) {
    font-size: 17vw;
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
  @media screen and (max-width: 690px) {
    font-size: 11vw;
  }
`;
export const MailText = styled.div`
  padding-top: 150px;
  font-size: 30px;
  opacity: 0.8;
  
  @media screen and (max-width: 768px) {
    padding-top: 110px;
  }
  @media screen and (max-width: 490px) {
    font-size: 6vw;
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