import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 80vh;
  background: #0c193f;
  position: relative;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  padding: 4rem 2rem 0rem 2rem; 

`;

export const Title = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: clamp(3rem, 8vw, 5rem);
`;