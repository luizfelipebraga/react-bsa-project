import { Banner } from "../../components/Banner";
import { NavBar } from "../../components/Nav";
import { SelfPromotedComponent } from "../../components/SelfPromot";
import { SocialMediasComponent } from "../../components/SocialMedias";
import { WaveBottom } from "../../components/Wave";
import { ContactSection } from "../Contato";
import { StatuteSection } from "../Estatuto";
import { AboutSection } from "../Sobre";
import { Container, Content, SectionHome } from "./styles";

export function Home() {
  return (
    <Container>
      <Banner />

      <Content>
        <NavBar />
        <SocialMediasComponent />


        <SectionHome id="home">
          <SelfPromotedComponent />
        </SectionHome>
        <WaveBottom color="#0c193f" />
      </Content>

      <AboutSection />
      <StatuteSection/>
      <ContactSection />

    </Container>
  )
}
