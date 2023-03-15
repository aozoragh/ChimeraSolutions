import styled from "styled-components";

// import imgs
import bg1 from "../public/assets/landing/background1.png";
import bg2 from "../public/assets/landing/background2.png";
import bg3 from "../public/assets/landing/background3.png";
import vector1 from '../public/assets/landing/vector1.png'
import serviceImg from '../public/assets/landing/service.png'
import mark from '../public/assets/landing/mark.png'


export const FirstSection = styled.div`
  background: url(${bg1.src});
  background-size: cover;
  width: 100vw;
  height: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    height: 1100px;
  }
  @media screen and (max-width: 425px) {
    height: 1000px;
  }
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
  /* margin-top: 100px; */
  @media screen and (max-width: 1024px) {
    font-size:40px;
    line-height: 47px;
    /* margin-top: 50px; */
  }
  @media screen and (max-width: 768px) {
    font-size:40px;
    line-height: 47px;
    /* margin-top: 50px; */
  }
  @media screen and (max-width: 425px) {
    font-size: 30px;
    line-height: 37px;
    /* margin-top: 50px; */
  }
`;
export const Vector = styled.div`
  width: 100%;
  height: 474px;
  /* border: 1px solid red; */
  background: url(${vector1.src}) no-repeat;
  background-size: 100% 100%;
  
  @media screen and (max-width: 1024px) {
    height: 400px;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
  }
  @media screen and (max-width: 425px) {
    height: 150px;
  }
`;
export const ContactButton = styled.div`
  width: 322px;
  height: 111px;
  border: 1px solid #9A6C03;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  color: #fff;
  /* margin-top: 50px; */
  
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    font-size: 33px;
  }
`;
export const SecondSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: 100vw;
  padding: 150px 0;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 320px) {
    padding: 80px 0;
  }
`;
export const SecondTittle = styled.div`
  font-weight: 500;
  font-size: 300px;
  line-height: 358px;
  color: #FFFFFF;
  @media screen and (max-width: 1440px) {
    font-size: 200px;
    line-height: 230px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 150px;
    line-height: 200px;
  }
  @media screen and (max-width: 768px) {
    font-size: 120px;
    line-height: 200px;
  }
  @media screen and (max-width: 425px) {
    font-size: 60px;
    line-height: 100px;
  }
  @media screen and (max-width: 320px) {
    font-size: 50px;
    line-height: 100px;
  }
`;
export const OurServices = styled.div`
  width: 100%;
  margin-top: 127px;
  div.service-top-title {
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 76px;
    @media screen and (max-width: 425px) {
      font-size: 50px;
    }
    @media screen and (max-width: 320px) {
      font-size: 40px;
    }
  }
  .slick-slider {
    overflow:hidden ;
  } 
  @media screen and (max-width: 1440px) {
    margin-top: 110px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 320px) {
    margin-top: 30px;
  }
  
`;
export const ServiceSlideContainer = styled.div`
  background-color: #0F0F13;
  padding: 30px;
    @media screen and (max-width: 425px) {
      padding: 15px;
    }
  
  border-radius: 10px;
  margin: 0 15px;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  
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
    word-wrap: break-word;
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
    @media screen and (max-width: 425px) {
      font-size: 45px;
    }
    @media screen and (max-width: 375px) {
      font-size: 40px;
    }
    @media screen and (max-width: 320px) {
      font-size: 35px;
    }
  }
  div.testimonial-body {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    @media screen and (max-width: 425px) {
      font-size: 30px;
    }
    @media screen and (max-width: 375px) {
      font-size: 28px;
    }
    @media screen and (max-width: 320px) {
      font-size: 25px;
    }
  }
  div.testimonial-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
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
    @media screen and (max-width: 768px) {
      width: 90%;
      margin-top: 10px;
    }
    @media screen and (max-width: 425px) {
      padding: 10px;
    }
    @media screen and (max-width: 375px) {
      padding: 5px;      
      /* width: 95%; */
    }
  }
  
    @media screen and (max-width: 425px) {
      margin-top: -10px;
    }
`;
export const ThirdSection = styled.div`
  background: url(${bg2.src});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  .swiper-slide {
    width: 200px !important;
  }
  .swiper {
    /* border: 1px solid red; */
  }
  
    @media screen and (max-width: 425px) {
      height: 70vh;
    }
`;
export const ThirdTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 76px;
    @media screen and (max-width: 425px) {
      text-align: center;
    }
    @media screen and (max-width: 320px) {
      font-size: 50px;
    }
`;
export const Mask = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  /* padding: 150px 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const ViewAllButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9A6C03;
  width: 203px;
  height: 70px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;
// export const TestSlideContainer = styled.div`
//   width: 100%;
// `;

export const FourthSection = styled.div`
  background: url(${bg3.src});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const ProductsText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 400px;
  line-height: 477px;
    @media screen and (max-width: 1440px) {
      font-size: 300px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 200px;
    }
    @media screen and (max-width: 768px) {
      font-size: 150px;
    }
    @media screen and (max-width: 425px) {
      font-size: 80px;
    }
    @media screen and (max-width: 320px) {
      font-size: 65px;
    }
`;


export const FifthSection = styled.div`
  background-color: #000;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
`;
export const AvatarGallery = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 80px;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 400px;
      @media screen and (max-width: 1024px) {
        width: 30%;
      }
      @media screen and (max-width: 768px) {
        width: 80%;
        margin-top: 20px;
        height: 450px;
      }
    img {
      object-fit: cover;
      width: 100%;
      height: 300px;
    }
    & > div:first-of-type {
      margin-top: 30px;
      font-style: normal;
      font-weight: 350;
      font-size: 35px;
      text-align: center;
      @media screen and (max-width: 1024px) {
        font-size: 30px;
      }
    }
    & > div:last-of-type {
      margin-top: 15px;
    }
  }
`;
export const MediaGallery = styled.div`  
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 80px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
`;
export const ViewMoreButton = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9A6C03;
  width: 203px;
  height: 70px;
  margin: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-top: 70px;
`;
export const OurTeamTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 76px;
  @media screen and (max-width: 320px) {
    font-size: 60px;
  }
`;
export const OurTeamDesc = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 450;
  font-size: 50px;
  line-height: 57px;
  margin-top: 50px;
  overflow-wrap: break-word;
  word-break: break-all;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  line-height: 50px;
  }
  @media screen and (max-width: 425px) {
    font-size: 30px;
  line-height: 40px;
  }
  @media screen and (max-width: 320px) {
    font-size: 20px;
  line-height: 30px;
  }
`;
export const MediaTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 76px;
  margin-top: 28px;
      @media screen and (max-width: 425px) {
        font-size: 55px;
      }
      @media screen and (max-width: 320px) {
        font-size: 45px;
      }
`;
export const MediaDesc = styled.div`
  font-style: normal;
  font-weight: 450;
  font-size: 50px;
  line-height: 57px;
  margin-top: 50px;
      @media screen and (max-width: 425px) {
        font-size: 35px;
      }
      @media screen and (max-width: 320px) {
        font-size: 30px;
      }
`;


export const SixthSection = styled.div`
  background: url(${bg1.src});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const Mark = styled.div`
  background: url(${mark.src});
  background-size: cover;
  width: 150px;
  height: 150px;
`;
export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:center ;
  height: 60%;
  font-style: normal;
  font-weight: 500;
  font-size: 45px;
  div {
    width: 320px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
export const sdfsdfsdfs = styled.div`

`;