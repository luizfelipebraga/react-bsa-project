import { Banner } from "../../components/Banner";
import { NavBar } from "../../components/Nav";
import { SelfPromotedComponent } from "../../components/SelfPromot";
import { WaveBottom } from "../../components/Wave";
import { ContactPage } from "../Contato";
import { Container, Content, SectionHome, SectionContact } from "./styles";

export function Home() {
  return (
    <Container>
      <Banner />

      <Content>
        <NavBar />

        <SectionHome>
          <WaveBottom />
          <SelfPromotedComponent />
        </SectionHome>
      </Content>

      <ContactPage/>

    </Container>
  )
}
