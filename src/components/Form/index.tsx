import InputComponent from '../Input';
import { Form, TextArea, Button } from './styles';

export function FormComponent() {
  return (
    <Form>
      <InputComponent id="name" name="name" type="text" placeholder="Nome" required/>
      <InputComponent id="email" name="email" type="email" placeholder="Email" required/>
      <TextArea id="infos" name="infos" placeholder="Mensagem" rows={3} cols={50} required/>
      <Button type="submit" value="Enviar"/>
    </Form>
  )
}
