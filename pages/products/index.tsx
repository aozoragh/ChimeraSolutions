import {
  TeamContainer,
  TeamContext,
  TeamHeadTxt,
  TeamHeadView,
  TeamSkillView,
  SkillTxt,
  PassContainer,
  PassContext,
  SubPassView,
  PassView,
  PassTxt,
  PassSmallTxt,
  PassViewContainer,
  DescribeTxt,
  EmailsContainer,
  EmailName,
  EmailAddress,
  PassViewNext,
  LineTop,
  SliderArea,
  PPETextArea,
  LineBottom,
  PTZTextArea,
  VideoArea,
  PlayButton,
  VideoWrapper,
  Video,
  SecondBackgroundArea,
  FirstText,
  SecondText,
  ThirdSection,
  Container
} from "../../styles/product.style";
import Image from "next/image";
export default function Team() {
  return (
    <TeamContainer>
      <TeamContext>
        <TeamHeadView>
          <TeamHeadTxt>Products</TeamHeadTxt>
          <TeamSkillView>
            <DescribeTxt>Innovation</DescribeTxt>
            <DescribeTxt>Consistency</DescribeTxt>
            <DescribeTxt>Quality</DescribeTxt>
          </TeamSkillView>
        </TeamHeadView>
      </TeamContext>
      <PassContext>
        <PassContainer>
          <PassView>
            <PassTxt>PASS</PassTxt>
            <SkillTxt>Protective</SkillTxt>
            <SkillTxt>Automated</SkillTxt>
            <SkillTxt>Surveillance</SkillTxt>
            <SkillTxt>System</SkillTxt>
            <EmailsContainer>
              <EmailName>SOFTWARE</EmailName>
              <EmailAddress>info@chimerasolutions.ai</EmailAddress>
              <EmailName>HARDWARE ABD MAINTENENCE</EmailName>
              <EmailAddress>info@mobilrouter.com</EmailAddress>
            </EmailsContainer>
          </PassView>
        </PassContainer>
        <PassViewNext>
          <PassViewContainer>
            <SubPassView>
              <LineTop>WE OFFER</LineTop>
              <SkillTxt>Protective</SkillTxt>
              <SkillTxt>Automated</SkillTxt>
              <SkillTxt>Surveillance</SkillTxt>
              <SkillTxt>System</SkillTxt>
            </SubPassView>
            <SubPassView>
              <PassSmallTxt>
                A lightweight computer vision surveillance system designed for
                monitoring construction sites. It can detect workers with
                insufficient personal protective equipment (PPE), store relevant
                video footage, and alert authorities in real-time.
              </PassSmallTxt>
            </SubPassView>
          </PassViewContainer>

          <PassViewContainer>
            <SubPassView>
              <LineTop>MOTIVATION</LineTop>
              <SkillTxt>Construction</SkillTxt>
              <SkillTxt>Worker safety</SkillTxt>
              <SkillTxt>Is a major concern</SkillTxt>
              <SkillTxt>Worldwide</SkillTxt>
            </SubPassView>

            <SubPassView>
              <PassSmallTxt>
                According to the U.S. Bureau of Labor Statistics, there were 2.8
                million nonfatal workplace injuries and illnesses in 2022.
                Proper monitoring could have prevented the majority of these
                accidents.
              </PassSmallTxt>
            </SubPassView>
          </PassViewContainer>
        </PassViewNext>
        <SliderArea>

        </SliderArea>
        <PPETextArea>
          To minimize on-site injuries and accidents we developed a real-time portable solution for PPE surveillance.
        </PPETextArea>
        <LineBottom>
          HOW IT WORKS
        </LineBottom>
        <PTZTextArea>
          Our application runs on the cloud, processing the data recorded on-site with PTZ cameras. The cameras can be applied with presets suitable for the given construction site, which will record a scene for a time range specified by the user.
          The detected workers who are not wearing proper PPE will be recorded in a database, which the users can interact with via an easy-to-use website.
        </PTZTextArea>
        <VideoArea>
          <img src={"/assets/products/tv.png"} alt="" draggable={false} />
          <VideoWrapper>
            <h1>PASS</h1>
            <PlayButton>
              <img src="/assets/products/play.png" alt="" />
            </PlayButton>
          </VideoWrapper>
          <Video>
            <video src="" poster="/assets/products/background.png" className="video" />
          </Video>
        </VideoArea>
      </PassContext>
      <SecondBackgroundArea>
        <img src="/assets/products/building.png" alt="" />
      </SecondBackgroundArea>
      <ThirdSection>
        <Container>
          <FirstText>PASS can be paired with an entry surveillance system</FirstText>
          <SecondText>As an extra layer of security, an entry point monitoring system can be implemented on sites, which requires only fixed and well-positioned IP cameras. Knowing the timestamp of the entry and who entered via the applied entrance card, paired with the detections, our computer vision algorithm can efficiently filter out workers who try to enter the site with insufficient PPE.</SecondText>
        </Container>
      </ThirdSection>
    </TeamContainer>
  );
}
