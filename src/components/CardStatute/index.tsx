import { JoinButton } from "../Button"
import { Container, Title, Description } from "./styles"

type CardProps = {
  img?: string;
  title: string;
  description: string;
  download: string;
}

export function CardStatuteComponent({ ...props }: CardProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <JoinButton>{props.download}</JoinButton>
    </Container>
  )
}
