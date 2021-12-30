import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  background: #000;
  position: relative;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  padding: 7rem 1rem;

`;

export const Title = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: clamp(3rem, 8vw, 5rem);
`;