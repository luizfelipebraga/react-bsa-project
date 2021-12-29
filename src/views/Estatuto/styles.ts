import styled from 'styled-components';

export const Container = styled.section`
  height: 70vh;
  background: #0c193f;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  list-style: none;
  padding: 0px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
`;