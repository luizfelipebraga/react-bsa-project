import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  background-color: #0099FF;
`;

export const Content = styled.div`
  height: 100%;
  padding: 80px 0;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  span {
    color: #fff;
    font-weight: 600;
    font-size: clamp(3rem, 8vw, 5rem);
  }

  p {
    color: #cfcfcf;
    font-size: clamp(1.1rem, 3vw, 1.5rem);
  }
`;