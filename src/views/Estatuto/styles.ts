import styled from 'styled-components';

export const Container = styled.section`
  height: 90vh;

  background-color: #3e92cc; // 7c004e 0c193f  3e92cc
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23dfdbe5' fill-opacity='0.16'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");


  @media(max-width: 1024px) {
    min-height: 90vh;
  }

  @media(max-width: 720px) {
    height: 100vh;
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  height: 100%;
  padding: 5rem 1rem;
  
`;

export const Title = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: clamp(3rem, 8vw, 6rem);
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
