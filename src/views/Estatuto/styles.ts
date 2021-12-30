import styled from 'styled-components';

export const Container = styled.section`
  height: 90vh;
  background: #0c193f;
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

export const Grid = styled.div`
  list-style: none;
  padding: 0px;
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  position: relative;
`;