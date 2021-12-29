import { CardStatuteComponent } from "../../components/CardStatute";
import { WaveBottom } from "../../components/Wave";
import { Container, Content, Grid } from "./styles";
import BrazilFlag from '../../assets/images/brazil.png';

export function StatuteSection() {

  const description = "Leia e esteja bem familiarizado com o ESTATUTO BSA, pois este é soberano e deve ser observado para que as propostas de OMDs sejam coerentes com o objetivo da DAC BSA, em sua missão de inclusão e favorecimento a todos os seus membros sem distinção."
  return (
    <Container>
      <WaveBottom color="#000"/>

      <Content>
        <Grid>
          <CardStatuteComponent img={BrazilFlag} title="Estatuto Portgu {&Vcirc;} s" description={description} download="Baixar"/>
          {/* <CardStatuteComponent/> */}
        </Grid>
      </Content>
    </Container>
  )
}
