import { Container, Header, Logo, Nav } from "./styles";
import { HashLink as Link } from "react-router-hash-link";
import LogoImg from '../../assets/images/logo2.png';
import { useState, useEffect, useCallback } from "react";
import { JoinButton } from "../Button";

export function NavBar() {

  //background
  const [navBar, setNavBar] = useState<boolean>(false);

  //showNav
  const [showNav, setShowNav] = useState<boolean>(true);

  //Scroll
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);

  //Mobile
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeBackground = useCallback(() => {
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
  }, [lastScrollPosition])

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, [lastScrollPosition,showNav, changeBackground ])

  function ScrollToTop() {
    window.scroll(0,1);
    // setIsOpen(false);
  }

  return (
    <Container showNav={showNav} navBar={navBar}>
      <Header>
        <Link to="" onClick={ScrollToTop}><Logo src={LogoImg} alt="Logo" /></Link>
        <Nav>
          <Link to="/#home">Bsa</Link>
          <Link to="/#home">aliste-se</Link>
          <Link to="/#estatuto">estatuto da bsa</Link>
          <Link to="/#contato">contatos</Link>
          <JoinButton>Aliste-se</JoinButton>
        </Nav>
      </Header>
    </Container>
  )
}
