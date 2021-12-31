import styled from 'styled-components';

export const Container = styled.section`
  height: 90vh;
  background: #7c004e; // 7c004e 0c193f;

  @media(max-width: 1024px) {
    min-height: 100vh;
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 1000px;
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

  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  position: relative; */

  display: flex;
  justify-content: center;
  align-items: center;
`;