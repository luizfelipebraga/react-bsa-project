import { WaveBottom } from "../../components/Wave";
import { Container, Content, AboutGuild, Barra } from "./styles";

export function AboutSection() {
  return (
    <Container id="sobre">
      <Content>
        <span> Brazillian Star Atlas</span>
        <p>A <strong>MAIOR</strong> aliança brasileira no StarAtlas, venha fazer parte e divirta-se.</p>

        <AboutGuild>
          <div>
            <span>1k+</span>
            <p>Pessoas na Guilda</p>
          </div>

          <Barra />

          <div>
            <span>800+</span>
            <p>Membros verificados no Discord</p>
          </div>

          <Barra />

          <div>
            <span>1</span>
            <p>Facção</p>
          </div>
        </AboutGuild>
      </Content>

      <WaveBottom color="#3e92cc" />

    </Container>
  )
}
