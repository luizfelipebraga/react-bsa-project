import { Button, Container } from "./styles";

type ProjectProps = {
  href?: string;
  type?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
};

export function JoinButton({
  href,
  target,
  type,
  rel,
  children,
  ...props
}: ProjectProps) {

  const white:boolean =  true;
  return (
    <Container>
      <Button
        white={white}
        href={href}
        target={target}
        rel="noreferrer"
        {...props}
      >
        {children}
      </Button>
    </Container>
  );
}
