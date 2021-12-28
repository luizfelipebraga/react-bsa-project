import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 16px;
  bottom: 0;
  left: 50px;
  right: auto;
  z-index: 10;

`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 93px;
    margin: 0 auto;
    background: #fff;
  }

  a {
    margin: 1rem;
    display: inline-block;
    position: relative;
    transition: all 0.5s ease-in-out 0s;

    svg {
      height: 2.5rem;
      fill: #cfcfcf;
      transition: all .2s ease-in-out;
      &:hover {
        fill: #fff;
        transform: translateY(-3px);
      }
    }
  }
`;

