import {
  ContactContainer,
  ContactText,
  FindUsOnText,
  LinkSet,
  LinkText,
  MailText
} from "../../styles/contact.style";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactText>Contact</ContactText>
      <FindUsOnText>FIND US ON</FindUsOnText>
      <LinkSet>
        <LinkText><a href="https://discord.gg/qD6Xbvy27h">DISCORD</a></LinkText>
        <LinkText><a href="https://www.linkedin.com/company/chimera-multimedia-and-solutions">LINKEDIN</a></LinkText>
        <LinkText><a href="https://www.upwork.com/ag/chimera/">UPWORK</a></LinkText>
        <LinkText><a href="https://www.instagram.com/chimeramultimedia/">INSTAGRAM</a></LinkText>
        <LinkText><a href="https://twitter.com/chimeramultimed">TWITTER</a></LinkText>
        <LinkText><a href="https://www.youtube.com/channel/UCdxmsmwcALg7nkWZ-GV8zbA">YOUTUBE</a></LinkText>
      </LinkSet>
      <MailText>info@chimerasolutions.ai</MailText>
    </ContactContainer>
  )
};
export default Contact;
