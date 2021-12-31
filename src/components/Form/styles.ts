import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction:column;
  gap: 2rem;

  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  margin-top: 5rem;
  
`;

export const TextArea = styled.textarea`
  background: transparent;
  color: #fff;
  font-size: 1.8rem;
  background: #06102c;
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1rem;
  border-radius: 1rem;
`;

export const Button = styled.input`
  background: #fff;
  font-size: 2rem;
  padding: 1rem;

  color: #06102c;
  border: 2px solid #e9e9e9;
  cursor: pointer;

  border-radius: 1rem;

  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    border: 2px solid #e9e9e9;
  }

  &:hover {
    color: #fff;
    background: transparent !important;
  }
`;