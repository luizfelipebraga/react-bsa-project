import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
`;

export const Button = styled.a`
  text-decoration: none;
  font-size: 3rem;
  margin-right: 1rem;
  overflow: hidden;
  font-weight: bold;
  color: #fff;
  padding: 16px 35px;
  position: relative;
  z-index: 1;
  border: 2px solid #19b8f5;
  &:hover {
      color: #fff;
      &:before {
          background: #19aef5;
          width: 100%;
      }
  }
  &:before {
      width: 0;
      height: 100%;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      transition: 0.7s ease;
    }
`;