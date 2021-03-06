import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

interface INavProps {
  navBar?: boolean;
  isOpen?: boolean;
  showNav?: boolean;
}

export const Container = styled.div<INavProps>`
  width: 100%;
  position: fixed;
  transition: all .2s ease-out;
  transform: ${({showNav}) => showNav ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)'};
  border-bottom: ${({ navBar }) => navBar && '1px solid #060728'};
  background: ${({ navBar }) => navBar ? '#060728' : 'transparent'};
  z-index: 55555;

  @media (max-width: 1400px) {
    background: #060728;
  }
`;

export const Header = styled.header<INavProps>`
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1400px) {
    max-width: auto;
  }

  span, a {
    color: #ffffff;
    text-transform: uppercase;
    font: 600 1rem 'Roboto', sans-serif;
  }
`;

export const Nav = styled.nav<INavProps>`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1400px) {
    height: 100%;
    width: 100%;
    flex-direction: column;
    z-index: 55555;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1400px) {
      z-index: 5555;
      display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background: #060728;
      padding: 0 0 1rem 0;
      height: 100vh;
    }
  }

  a {
    :not(:last-child) {
      display: inline-block;
      &:after {
        content: '';
        color: #fff;
        width: 0px;
        height: 2px;
        display: block;
        background: black;
        transition: 300ms;
      }
      &:hover::after {
        width: 100%;
        background: #fff;
      }
    }
  }
`;

export const Logo = styled.img`
  height: 5rem;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const HambuerIcon = styled(GiHamburgerMenu)`
  display: none;
  fill: #fff;
  height: 2rem;
  cursor: pointer;
  @media (max-width: 1400px) {
    display: block;
    margin: .8rem 0;
    align-items: right;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: none;
  fill: #fff;
  height: 3rem;
  cursor: pointer;
  @media (max-width: 1400px) {
    display: block;
    margin: 1rem 0;
    align-items: right;
  }
`;