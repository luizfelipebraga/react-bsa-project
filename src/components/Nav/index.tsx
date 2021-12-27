import { Container, Header, Logo, Nav } from "./styles";
import { Link } from "react-router-dom";
import LogoImg from '../../assets/images/logo2.png';
import { useState, useEffect } from "react";

export function NavBar() {

  const [navBar, setNavBar] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function changeBackground() {
    if(window.scrollY > 10) {
      setNavBar(true);
    }
    else {
      setNavBar(false);
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, [])

  function ScrollToTop() {
    window.scroll(0,1);
    setIsOpen(false);
  }

  return (
    <Container>
      <Header>
        <Link to="" onClick={ScrollToTop}><Logo src={LogoImg} alt="Logo" /></Link>
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
