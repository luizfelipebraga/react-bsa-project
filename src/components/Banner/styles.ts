import styled from 'styled-components';

export const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);

  z-index: -1;

  background: linear-gradient(45deg, rgba(42, 74, 228, 0.19), rgba(0, 22, 129, 0.314));
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  margin: 0 auto;

  z-index: 55555;
`;