import { Button, Container } from "./styles";

type ProjectProps = {
  href?: string;
  type?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function JoinButton({ href, target, type, rel, children, ...props }: ProjectProps) {
  return (
    <Container>
      <Button href={href} target={target} rel="noreferrer">{children}</Button>
    </Container>
  )
}