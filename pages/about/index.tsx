import {
  AboutContainer,
  AboutContentTxt,
  AboutContentView,
  AboutContext,
  AboutHeadTxt,
  AboutHeadView,
} from "../../styles/about.style";

export default function About() {
  return (
    <AboutContainer>
      <AboutContext>
        <AboutHeadView>
          <AboutHeadTxt>About</AboutHeadTxt>
        </AboutHeadView>
        <AboutContentView>
          <AboutContentTxt>
            We are offer programming services that perfectly match the unique
            needs of our clients. Enrich your business with new, high-tech
            opportunities. Level up with the potential of A.I. solutions.
          </AboutContentTxt>
        </AboutContentView>
      </AboutContext>
    </AboutContainer>
  );
}
