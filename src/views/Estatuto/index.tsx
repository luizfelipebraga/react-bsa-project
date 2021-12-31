import { CardStatuteComponent } from "../../components/CardStatute";
import { WaveBottom } from "../../components/Wave";
import { Container, Content, Grid, Title } from "./styles";
// import BrazilFlag from '../../assets/images/brazil.png';
// import UsaFlag from '../../assets/images/usa1.png';

export function StatuteSection() {

  const descricao = "Leia e esteja bem familiarizado com o ESTATUTO BSA, pois este é soberano e deve ser observado para que as propostas de OMDs sejam coerentes com o objetivo da DAC BSA, em sua missão de inclusão e favorecimento a todos os seus membros sem distinção."
  return (
    <Container>

      <WaveBottom color="#0c193f" />

      <Content>

        <Title>Estatuto da BSA</Title>

        <Grid>
          <CardStatuteComponent title="Estatuto Portugu&#234;s" description={descricao} download="Baixar" />
        </Grid>
      </Content>


    </Container>
  )
}
