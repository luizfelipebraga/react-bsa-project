import InputComponent from '../Input';
import { Form, TextArea, Button } from './styles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

export function FormComponent() {

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs.sendForm('service_id', 'gmail', event.target, 'user_id')
      .then(() => {
        const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(functionThatReturnPromise, {
          pending: 'Loading',
          success: 'Email has sent, thank you!',
          error: 'Something happened, try again.'
        })
      }, (error) => {
        toast.error("Something happened, try again.");
        console.error(error.text);
      });
  };

  return (
    <Form onSubmit={sendEmail}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <InputComponent id="name" name="name" type="text" placeholder="Nome" required/>
      <InputComponent id="email" name="email" type="email" placeholder="Email" required/>
      <TextArea id="infos" name="infos" placeholder="Mensagem" rows={3} cols={50} required/>
      <Button type="submit" value="Enviar"/>
    </Form>
  )
}
