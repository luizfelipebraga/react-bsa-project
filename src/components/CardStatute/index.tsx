import { JoinButton } from "../Button"
import { Container, Image, Title, Description } from "./styles"

type CardProps = {
  img: string;
  title: string;
  description: string;
  download: string;
}

export function CardStatuteComponent({...props}: CardProps) {
  return (
    <Container>
      <Image src={props.img} alt="imagem de bandeira"/>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <JoinButton>download</JoinButton>
    </Container>
  )
}
