import {
  TeamContainer,
  TeamContext,
  TeamHeadTxt,
  TeamHeadView,
  TeamSkillView,
  SkillTxt,
  Line,
  PassContainer,
  PassContext,
  SubPassView,
  PassView,
  PassTxt,
  PassSmallTxt,
  PassViewContainer,
  DescribeTxt,
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
          <Line />
        </TeamHeadView>
      </TeamContext>
      <PassContext>
        <PassContainer>
          <PassView>
            <PassTxt>PASS</PassTxt>
            {/* <SkillTxt>Protective</SkillTxt>
            <SkillTxt>Automated</SkillTxt>
            <SkillTxt>Surveillance</SkillTxt> */}
          </PassView>
        </PassContainer>
        <PassView>
          <PassViewContainer>
            <SubPassView>
              <Line color="white" />
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
              <Line color="white" />
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
        </PassView>
      </PassContext>
    </TeamContainer>
  );
}
