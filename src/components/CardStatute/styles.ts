import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  min-height: 300px;
  padding: 2rem 1.75rem;

  cursor: pointer;

  transition: all 0.2s ease-in-out 0s;
  background: rgb(24, 24, 26);
  box-shadow: rgb(15 15 16 / 91%) 0px 10px 30px -15px;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
`;

export const Title = styled.h1`
`;

export const Description = styled.p`
`;