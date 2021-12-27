import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3rem;
  border-bottom: 1px solid #8a9ff9;
  background: #00000050;
`;

export const Header = styled.header`
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  span, a {
    color: #ffffff;
    text-transform: uppercase;
    font: 600 1rem 'Roboto', sans-serif;
  }
`;

export const Nav = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
        margin-top: 1rem;
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
`;