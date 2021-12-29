import { JoinButton } from "../Button"
import { Container } from "./styles"

type CardProps = {
  img: string;
  title: string;
  description: string;
  download: string;
}

export function CardStatuteComponent({...props}: CardProps) {
  return (
    <Container>
      <Image>{props.img}</Image>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <JoinButton></JoinButton>
    </Container>
  )
}
