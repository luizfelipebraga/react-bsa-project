import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  >div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  span {
    color: #ffffff;
    font: 600 2rem 'Cinzel Decorative', sans-serif;
  }
`;

export const Logo = styled.img`
  margin: 0 auto;
  height: 15rem;
`;