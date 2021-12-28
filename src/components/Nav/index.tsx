import { Container, Header, Logo, Nav } from "./styles";
import { Link } from "react-router-dom";
import LogoImg from '../../assets/images/logo2.png';
import { useState, useEffect } from "react";
import { JoinButton } from "../Button";

export function NavBar() {

  //background
  const [navBar, setNavBar] = useState<boolean>(false);

  //showNav
  const [showNav, setShowNav] = useState<boolean>(true);

  //Scroll
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);

  //Mobile
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function changeBackground() {

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }

      if(currentScrollPosition > 10) {
        setNavBar(true);
      }
  
      else {
        setNavBar(false);
      }

      if(window.innerWidth <= 992){
        setShowNav(true);
        setLastScrollPosition(currentScrollPosition);
        return
      }

      if (Math.abs(currentScrollPosition - lastScrollPosition) < 40) {
        return
      }
      const verifyPosition = currentScrollPosition < lastScrollPosition

      setShowNav(verifyPosition)
      setLastScrollPosition(currentScrollPosition) 
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, [lastScrollPosition, changeBackground, showNav ])

  function ScrollToTop() {
    window.scroll(0,1);
    setIsOpen(false);
  }

  return (
    <Container showNav={showNav} navBar={navBar}>
      <Header>
        <Link to="" onClick={ScrollToTop}><Logo src={LogoImg} alt="Logo" /></Link>
        <Nav>
          <Link to="#">Bsa</Link>
          <Link to="#">aliste-se</Link>
          <Link to="#">estatuto da bsa</Link>
          <Link to="#">contatos</Link>
          <JoinButton>Join Discord</JoinButton>
        </Nav>
      </Header>
    </Container>
  )
}
