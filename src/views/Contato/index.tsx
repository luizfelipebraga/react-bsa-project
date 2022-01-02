import { FormComponent } from '../../components/Form';
import { Container, Title, Content } from './styles';

export function ContactSection() {
  return (
    <Container id="contato">
      <Content>
        <Title>Contato</Title>
        <FormComponent/>
      </Content>
    </Container>
  )
}
