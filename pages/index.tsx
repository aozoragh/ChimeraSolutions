import Head from "next/head";
import Link from "next/link";
import { Container, Main } from "../components/sharedstyles";

import {
  BsStarFill,
  BsDiscord,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

// Import Swiper React components
import Slider from "react-slick";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import head1 from "../public/assets/landing/head1.png";
import member1 from "../public/assets/landing/mem1.png";
import member2 from "../public/assets/landing/mem2.png";
import member3 from "../public/assets/landing/mem3.png";
import media1 from "../public/assets/landing/media1.png";
import media2 from "../public/assets/landing/media2.png";
import media3 from "../public/assets/landing/media3.png";

import slide1 from "../public/assets/landing/slide/1.png";
import slide2 from "../public/assets/landing/slide/2.png";
import slide3 from "../public/assets/landing/slide/3.png";

import {
  FirstSection,
  ContactDescription,
  Vector,
  LandingContainer,
  ContactButton,
  SecondSection,
  SecondTittle,
  OurServices,
  OurTestimonials,
  ServiceSlideContainer,
  ThirdSection,
  ThirdTitle,
  ViewAllButton,
  Mask,
  FourthSection,
  ProductsText,
  FifthSection,
  AvatarGallery,
  MediaGallery,
  ViewMoreButton,
  OurTeamTitle,
  OurTeamDesc,
  MediaTitle,
  MediaDesc,
  SixthSection,
  Mark,
  ContactArea,
} from "../styles/landing.style";

export default function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Head>
        <title>Chimera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/grey-icon.png" />
        <link
          href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <FirstSection>
          <LandingContainer>
            <Vector></Vector>
            <ContactDescription>
              Our vision is to transform your dreams into a professional brand.
              <br />
              Chimera provides state-of-the-art services.
              <br />
              Let us enrich your business with new, high-tech opportunities
            </ContactDescription>
            <ContactButton>Contact Us</ContactButton>
          </LandingContainer>
        </FirstSection>

        <SecondSection>
          <LandingContainer>
            <SecondTittle>WE OFFER</SecondTittle>
            <OurServices>
              <div className="service-top-title">Our Services</div>
              <Slider {...settings}>
                <div>
                  <ServiceSlideContainer>
                    <div className="service-image"></div>
                    <div className="service-title">Machine Learning</div>
                    <div className="service-body">
                      is an essential component of modern software development
                      and data science, and can help your organization stay
                      ahead of the curve in terms of innovation and efficiency.{" "}
                      <br />
                      Contact us today to learn more about how our machine
                      learning services can benefit your organization.
                    </div>
                  </ServiceSlideContainer>
                </div>
                <div>
                  <ServiceSlideContainer>
                    <div className="service-image"></div>
                    <div className="service-title">Computer Vision</div>
                    <div className="service-body">
                      is an essential component of many modern applications,
                      from retail and healthcare to manufacturing and logistics.{" "}
                      <br />
                      Our computer vision services can help you stay ahead of
                      the curve in terms of innovation and efficiency, enabling
                      you to achieve your business goals and objectives more
                      effectively.
                    </div>
                  </ServiceSlideContainer>{" "}
                </div>
                <div>
                  <ServiceSlideContainer>
                    <div className="service-image"></div>
                    <div className="service-title">
                      Software Architectual Design
                    </div>
                    <div className="service-body">
                      <b>
                        Consistency, quality, and future-proof standards are
                        essential in the software business.
                      </b>
                      <br />
                      Our team has many years of expertise in software
                      architectural design.
                      <br />
                      Dreaming software is only a tiny part of the job.
                      <br />
                      If you want your software to run 24/7, to be optimized,
                      get it standardized, you are in good hands.
                      <br />
                      Leave the tedious job for us if you wish to have
                      rock-solid software!
                    </div>
                  </ServiceSlideContainer>{" "}
                </div>
                <div>
                  <ServiceSlideContainer>
                    <div className="service-image"></div>
                    <div className="service-title">
                      Consultancy&Optimization
                    </div>
                    <div className="service-body">
                      The key to a successful project is good communication.
                      <br />
                      Managing jobs in a milestone/checkpoint system are all
                      about consultations and optimization. With our clients, we
                      are creating an iterative process whereby we slowly but
                      surely can converge to the best possible solution to their
                      problems.
                      <br />
                      <b>
                        Tell us about your project. Let us help you enhance it
                        to the max.
                      </b>
                    </div>
                  </ServiceSlideContainer>
                </div>
              </Slider>
            </OurServices>
            <OurTestimonials>
              <div className="testimonial-title">Our Testimonials</div>
              <div className="testimonial-body">
                Customer feedback is important to maximize performance.
                <br />
                Fitting to your needs.
              </div>
              <div className="testimonial-layout">
                <div>
                  <img src={head1.src} alt="test-head" />
                  <div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                    <div className="stars">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={head1.src} alt="test-head" />
                  <div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                    <div className="stars">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={head1.src} alt="test-head" />
                  <div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                    <div className="stars">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </div>
                </div>
              </div>
            </OurTestimonials>
          </LandingContainer>
        </SecondSection>

        <ThirdSection>
          <Mask>
            <LandingContainer>
              <ThirdTitle>Our Latest Projects</ThirdTitle>
              <Swiper
              spaceBetween={750}
              slidesPerView={2}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><div className="latest-project-slide"><img src={slide1.src} alt="slide" /></div></SwiperSlide>
              <SwiperSlide><div className="latest-project-slide"><img src={slide2.src} alt="slide" /></div></SwiperSlide>
              <SwiperSlide><div className="latest-project-slide"><img src={slide3.src} alt="slide" /></div></SwiperSlide>
            </Swiper>
              <Link href="/projects" passHref>
                <ViewAllButton>View All</ViewAllButton>
              </Link>           
            </LandingContainer>
          </Mask>
        </ThirdSection>

        <FourthSection>
          <LandingContainer>
            <div></div>
            <ProductsText>Products</ProductsText>
            <Link href="/products" passHref>
              <ViewAllButton>View All</ViewAllButton>
            </Link>
          </LandingContainer>
        </FourthSection>

        <FifthSection>
          <LandingContainer>
            <OurTeamTitle>Our Team</OurTeamTitle>
            <OurTeamDesc>
              Highly motivated to produce high-quality products, solve real-life
              problems, and use state-of-the-art technology. We believe in good
              communication and precise planning to deliver the most convenient
              services and solutions to our customers. We are looking forward to
              working with you!
            </OurTeamDesc>
            <AvatarGallery>
              <div>
                <img src={member1.src} alt="member1" />
                <div className="team-members-name">Demeter Márton</div>
                <div className="team-members-job">CEO</div>
              </div>
              <div>
                <img src={member2.src} alt="member1" />
                <div className="team-members-name">Török Gábor</div>
                <div className="team-members-job">CTO</div>
              </div>
              <div>
                <img src={member3.src} alt="member1" />
                <div className="team-members-name">Németh Barnabás</div>
                <div className="team-members-job">Social Media Manager</div>
              </div>
            </AvatarGallery>
            <ViewMoreButton>View More</ViewMoreButton>
            <MediaTitle>Social Media</MediaTitle>
            <MediaDesc>
              We think communication is key, thus we share our thoughts and
              projects to the world consistently.
            </MediaDesc>
            <MediaGallery>
              <div>
                <img src={media1.src} alt="media1" />
              </div>
              <div>
                <img src={media2.src} alt="media1" />
              </div>
              <div>
                <img src={media3.src} alt="media1" />
              </div>
            </MediaGallery>
          </LandingContainer>
        </FifthSection>

        <SixthSection>
          <LandingContainer>
            <Mark></Mark>
            <ContactArea>
              <Link href="/about" passHref>
                <span>About</span>
              </Link>
              <Link href="/team" passHref>
                <span>Team</span>
              </Link>
              <Link href="/contact" passHref>
                <span>Contacts</span>
              </Link>
              <Link href="/products" passHref>
                <span>Products</span>
              </Link>

              <div>
                <a href="https://discord.com/invite/qD6Xbvy27h" target="_blank">
                  <BsDiscord />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCdxmsmwcALg7nkWZ-GV8zbA"
                  target="_blank"
                >
                  <BsYoutube />
                </a>
                <a
                  href="https://www.linkedin.com/company/chimera-multimedia-and-solutions"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
                <a href="https://twitter.com/chimeramultimed" target="_blank">
                  <BsTwitter />
                </a>
                <a
                  href="https://www.instagram.com/chimerasolutionsai/"
                  target="_blank"
                >
                  <BsInstagram />
                </a>
              </div>
            </ContactArea>
          </LandingContainer>
        </SixthSection>
      </Main>
    </Container>
  );
}
