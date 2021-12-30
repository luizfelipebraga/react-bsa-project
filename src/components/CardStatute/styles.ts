import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  min-height: 300px;

  transition: all 0.2s ease-in-out 0s;
  background: rgb(24, 24, 26);
  

  box-shadow: rgb(15 15 16 / 91%) 0px 10px 30px -15px;
  border-radius: 3px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  padding: 0 0 3rem 0;

  a {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;

export const Image = styled.img`
  width: 50px;
  object-fit: cover;
  height: 100px;

  flex-shrink: 0;
`;

export const Title = styled.span`
  font-size: 2rem;
  color: #fff;
  font-weight: 600;
  padding-top: 2rem;
`;

export const Description = styled.p`
  padding: 0 1.5rem;

  color: rgb(199, 195, 195);
  font-size: clamp(14px, 2vw, 10px);
  line-height: 25px;
`;