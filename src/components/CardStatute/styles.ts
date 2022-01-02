import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  min-height: 300px;

  transition: all 0.2s ease-in-out 0s;
  /* background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%); */
  background-image: linear-gradient(45deg, #3e92cc 0%, #0c193f 100%);
  
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
  font-size: 2.3rem;
  color: #fff;
  font-weight: 600;
  padding-top: 2rem;
`;

export const Description = styled.p`
  padding: 0 2rem;

  text-align: left;

  color: #f8f8f8;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 25px;
`;