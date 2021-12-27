import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  height: 100%;

  max-width: 100%;
  margin: 0 auto;

  padding: 7rem 1rem;

  >div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  span {
    color: #ffffff;
    font: 600 2rem 'Cinzel Decorative', sans-serif;
  }
`;

export const Logo = styled.img`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 15rem;
  margin-bottom: 3rem;

`;