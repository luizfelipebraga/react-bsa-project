import { Container, Header, Nav } from "./styles";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Container>
      <Header>
        <span>Logo</span>
        <Nav>
          <Link to="#">Bsa</Link>
          <Link to="#">aliste-se</Link>
          <Link to="#">estatuto da bsa</Link>
          <Link to="#">contatos</Link>
        </Nav>
      </Header>
    </Container>
  )
}
