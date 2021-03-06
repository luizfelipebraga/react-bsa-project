import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  min-height: 100vh;
  position: relative;
  background: linear-gradient(45deg, rgba(42, 74, 228, 0.19), rgba(0, 22, 129, 0.314));
`;

export const SectionHome = styled.section`
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 1400px) {
    padding: 3rem 1rem;
  }
`;
