import {
  TeamContainer,
  TeamContext,
  TeamHeadTxt,
  TeamHeadView,
  TeamSkillView,
  SkillTxt,
  Line,
  OurText,
  OurTDescribe,
  TeamDescriontoion,
  TeamSection,
  TeamAvatar,
  SkillContainer,
  LinkView,
  LanguageTxt,
  LinkTxt,
} from "../../styles/team.style";
import Image from "next/image";
import { teamdata } from "../../constant/data";
export default function Team() {
  return (
    <TeamContainer>
      <TeamContext>
        <TeamHeadView>
          <TeamHeadTxt>Team</TeamHeadTxt>
          <TeamSkillView>
            <SkillTxt>Innovation</SkillTxt>
            <SkillTxt>Consistency</SkillTxt>
            <SkillTxt>Quality</SkillTxt>
          </TeamSkillView>
          <Line />
          <TeamDescriontoion>
            <OurText style={{ padding: "25px 0" }}>OUR TEAM IS</OurText>
            <OurTDescribe>
              Highly motivated to produce high-quality products, solve real-life
              problems, and use state-of-the-art technology. We believe in good
              communication and precise planning to deliver the most convenient
              services and solutions to our customers. We are looking forward to
              working with you!
            </OurTDescribe>
          </TeamDescriontoion>
        </TeamHeadView>
        <TeamSection>
          <TeamAvatar>
            <Image
              src={teamdata[0].avatar.src}
              width={460}
              height={578}
              alt="avatar"
            />
            <Line />
            <OurText>{teamdata[0].role}</OurText>
            <SkillTxt>{teamdata[0].name}</SkillTxt>
            <OurText>CONTACT</OurText>
            <OurTDescribe>{teamdata[0].contact_email}</OurTDescribe>
            <OurTDescribe>{teamdata[0].phone}</OurTDescribe>
            <LinkView style={{ width: "100%" }}>
              <OurText>LET ME INTRODUCE MYSELF</OurText>
            </LinkView>
            <Line />
            <OurTDescribe>{teamdata[0].intro}</OurTDescribe>
          </TeamAvatar>
          <SkillContainer>
            <LinkView>
              <OurText>LINKS</OurText>
              <Line />
              {teamdata[0].link.map((item, key) => (
                <LinkTxt key={key + 1} href={item.link} target="_blank">
                  {item.title}
                </LinkTxt>
              ))}
            </LinkView>
            <LinkView>
              <OurText>INSPIRATION AND FREETIME</OurText>
              <Line />
              {teamdata[0].hobby.map((item, key) => (
                <SkillTxt key={key + 1}>{item}</SkillTxt>
              ))}
            </LinkView>
          </SkillContainer>
          <LinkView>
            <OurText>SKILLS</OurText>
          </LinkView>
          <Line />
          <SkillContainer>
            <LinkView>
              <OurText>PROGRAMMING LANGUAGES</OurText>
              <Line />
              {teamdata[0].language.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>
            <LinkView>
              <OurText>FRAMEWORKS</OurText>
              <Line />
              {teamdata[0].frame.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>

            <LinkView>
              <OurText>SOFTWARE</OurText>
              <Line />
              {teamdata[0].software.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>
            <LinkView>
              <OurText>SOFT SKILLS</OurText>
              <Line />
              {teamdata[0].softskill.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>
          </SkillContainer>
        </TeamSection>
        <TeamSection>
          <TeamAvatar>
            <Image
              src={teamdata[1].avatar.src}
              width={460}
              height={578}
              alt="avatar"
            />
            <Line />
            <OurText>{teamdata[1].role}</OurText>
            <SkillTxt>{teamdata[1].name}</SkillTxt>
            <OurText>CONTACT</OurText>
            <OurTDescribe>{teamdata[1].contact_email}</OurTDescribe>
            <OurTDescribe>{teamdata[1].phone}</OurTDescribe>
            <LinkView>
              <OurText>LET ME INTRODUCE MYSELF</OurText>
            </LinkView>
            <Line />
            <OurTDescribe>{teamdata[1].intro}</OurTDescribe>
          </TeamAvatar>
          <SkillContainer>
            <LinkView>
              <OurText>LINKS</OurText>
              <Line />
              {teamdata[1].link.map((item, key) => (
                <LinkTxt key={key + 1} href={item.link} target="_blank">
                  {item.title}
                </LinkTxt>
              ))}
            </LinkView>
            <LinkView>
              <OurText>INSPIRATION AND FREETIME</OurText>
              <Line />
              {teamdata[1].hobby.map((item, key) => (
                <SkillTxt key={key + 1}>{item}</SkillTxt>
              ))}
            </LinkView>
          </SkillContainer>
          <LinkView>
            <OurText>SKILLS</OurText>
          </LinkView>
          <Line />
          <SkillContainer>
            <LinkView>
              <OurText>PROGRAMMING LANGUAGES</OurText>
              <Line />
              {teamdata[1].language.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>
            <LinkView>
              <OurText>FRAMEWORKS</OurText>
              <Line />
              {teamdata[1].frame.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>

            <LinkView>
              <OurText>SOFT SKILLS</OurText>
              <Line />
              {teamdata[1].softskill.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>
          </SkillContainer>
        </TeamSection>
        <TeamSection>
          <TeamAvatar>
            <Image
              src={teamdata[2].avatar.src}
              width={460}
              height={578}
              alt="avatar"
            />
            <Line />
            <OurText>{teamdata[2].role}</OurText>
            <SkillTxt>{teamdata[2].name}</SkillTxt>
            <OurText>CONTACT</OurText>
            <OurTDescribe>{teamdata[2].contact_email}</OurTDescribe>
            <OurTDescribe>{teamdata[2].phone}</OurTDescribe>
            <LinkView>
              <OurText>LET ME INTRODUCE MYSELF</OurText>
            </LinkView>
            <Line />
            <OurTDescribe>{teamdata[2].intro}</OurTDescribe>
          </TeamAvatar>
          <SkillContainer>
            <LinkView>
              <OurText>LINKS</OurText>
              <Line />
              {teamdata[2].link.map((item, key) => (
                <LinkTxt key={key + 1} href={item.link} target="_blank">
                  {item.title}
                </LinkTxt>
              ))}
            </LinkView>
            <LinkView>
              <OurText>INSPIRATION AND FREETIME</OurText>
              <Line />
              {teamdata[2].hobby.map((item, key) => (
                <SkillTxt key={key + 1}>{item}</SkillTxt>
              ))}
            </LinkView>
          </SkillContainer>
          <LinkView>
            <OurText>SKILLS</OurText>
          </LinkView>
          <Line />
          <SkillContainer>
            <LinkView>
              <OurText>FRAMEWORKS</OurText>
              <Line />
              {teamdata[2].frame.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>

            <LinkView>
              <OurText>SOFTWARE</OurText>
              <Line />
              {teamdata[2].softskill.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>
            <LinkView>
              <OurText>SOFT SKILLS</OurText>
              <Line />
              {teamdata[2].software.map((item, key) => (
                <LanguageTxt key={key + 1}>{item}</LanguageTxt>
              ))}
            </LinkView>
          </SkillContainer>
        </TeamSection>
      </TeamContext>
    </TeamContainer>
  );
}
