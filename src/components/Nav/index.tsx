import { Container, Header, Logo, Nav, CloseIcon, HambuerIcon } from "./styles";
import { HashLink as Link } from "react-router-hash-link";
import LogoImg from "../../assets/images/logo2.png";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeBackground = useCallback(() => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < 0) {
      return;
    }

    if (currentScrollPosition > 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }

    if (window.innerWidth <= 992) {
      setShowNav(true);
      setLastScrollPosition(currentScrollPosition);
      return;
    }

    if (Math.abs(currentScrollPosition - lastScrollPosition) < 40) {
      return;
    }
    const verifyPosition = currentScrollPosition < lastScrollPosition;

    setShowNav(verifyPosition);
    setIsOpen(false);
    setLastScrollPosition(currentScrollPosition);
  }, [lastScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [lastScrollPosition, showNav, changeBackground]);

  function ScrollToTop() {
    window.scroll(0, 1);
    setIsOpen(false);
  }

  return (
    <Container showNav={showNav} navBar={navBar}>
      <Header>
        <Link to="" onClick={ScrollToTop}>
          <Logo src={LogoImg} alt="Logo" />
        </Link>
        <Nav isOpen={isOpen}>
          {isOpen ? (
            <CloseIcon size={30} onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <HambuerIcon size={30} onClick={() => setIsOpen(!isOpen)} />
          )}
          <ul>
            <Link to="/#home" onClick={ScrollToTop}>
              Bsa
            </Link>
            <a
              href="https://discord.gg/Ha22uZ6S3J"
              target="_blank"
              rel="noreferrer"
            >
              aliste-se
            </a>
            <Link to="/#estatuto" onClick={() => setIsOpen(false)}>estatuto da bsa</Link>
            <Link to="/#contato" onClick={() => setIsOpen(false)}>contatos</Link>
            <JoinButton
              href="https://discord.gg/Ha22uZ6S3J"
              target="_blank"
              rel="noreferrer"
            >
              Aliste-se
            </JoinButton>
          </ul>
        </Nav>
      </Header>
    </Container>
  );
}
