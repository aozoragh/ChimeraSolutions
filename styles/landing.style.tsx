import styled from "styled-components";

// import imgs
import bg1 from "../public/assets/landing/background1.png";
import bg2 from "../public/assets/landing/background2.png";
import vector1 from '../public/assets/landing/vector1.png'
import serviceImg from '../public/assets/landing/service.png'


export const FirstSection = styled.div`
  background: url(${bg1.src});
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

export const LandingContainer = styled.div`
  width: 80%;
  height: 80%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContactDescription = styled.div`
  font-style: normal;
  font-weight: 450;
  font-size: 50px;
  line-height: 57px;
  color: #FFFFFF;
`;
export const Vector = styled.div`
  width: 100%;
  height: 50%;
  background: url(${vector1.src});
  background-size: 100% 100%;
`;
export const ContactButton = styled.div`
  width: 322px;
  height: 100px;
  border: 1px solid #9A6C03;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 60px;
  color: #fff;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SecondSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: 100vw;
  padding: 150px 0;
`;
// export const SecondSectionContainer = styled.div`

// `;
export const SecondTittle = styled.div`
  font-weight: 500;
  font-size: 300px;
  line-height: 358px;
  color: #FFFFFF;
`;
export const OurServices = styled.div`
  width: 100%;
  margin-top: 147px;
  div.service-top-title {
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 76px;
  }
  .slick-slider {
    overflow:hidden ;
  } 
  
`;
export const ServiceSlideContainer = styled.div`
  background-color: #0F0F13;
  padding: 30px;
  
  border-radius: 10px;
  margin: 0 15px;
  margin-top: 50px;
  
  div.service-image {
    background: url(${serviceImg.src});
    background-size: cover;
    width: 120px;
    height: 120px;
  }
  div.service-title {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    margin-top: 30px;
  }
  div.service-body {
    font-style: normal;
    font-weight: 350;
    font-size: 24px;
    line-height: 27px;
    margin-top: 15px;
  }
`;
export const OurTestimonials = styled.div`

  div.testimonial-title {
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 76px;
  }
  div.testimonial-body {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
  }
  div.testimonial-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div.testimonial-layout > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #0F0F13;
    border-radius: 20px;
    width: 30%;
    padding: 30px;
    img {
      width: 50px;
      height: 50px;
    }
    & > div {
      width: 80%;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    }
    div.stars {
      margin-top: 15px;
      svg {
        color: yellow;
        margin-left: 5px;
      }
    }
  }
  
`;
export const ThirdSection = styled.div`
  background: url(${bg2.src});
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  
  .slick-slider {
    overflow:hidden ;
  } 
`;
export const ThirdTitle = styled.div`

`;
export const ViewAllButton = styled.div`

`;
export const sdfsdfsdfs = styled.div`

`;