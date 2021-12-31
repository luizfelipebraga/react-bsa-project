import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 70vh;
  background-color: #7c004e; // 0099FF azul escuro  - 7c004e  rosa //;
`;

export const Content = styled.div`
  height: 100%;
  padding: 80px 2rem;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;

  span {
    color: #fff;
    font-weight: 600;
    font-size: clamp(3rem, 8vw, 5rem);
  }

  p {
    color: #f8f8f8;
    font-size: clamp(1.2rem, 3vw, 1.8rem);
  }
`;

export const AboutGuild = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    color: #f9f9f9;
    font-size: clamp(1.1rem, 3vw, 1.3rem);
  }
`;

export const Barra = styled.span`
  display: block;
  width: 2px;
  height: 93px;
  margin: 0 auto;
  background: #fff;
`;