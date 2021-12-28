import { Banner } from "../../components/Banner";
import { NavBar } from "../../components/Nav";
import { SelfPromotedComponent } from "../../components/SelfPromot";
import { SocialMediasComponent } from "../../components/SocialMedias";
import { WaveBottom } from "../../components/Wave";
import { ContactPage } from "../Contato";
import { Container, Content, SectionHome } from "./styles";

export function Home() {
  return (
    <Container>
      <Banner />


      <Content>
        <NavBar />
        <SocialMediasComponent />


        <SectionHome>
          <WaveBottom />
          <SelfPromotedComponent />
        </SectionHome>
      </Content>

      <ContactPage />

    </Container>
  )
}
