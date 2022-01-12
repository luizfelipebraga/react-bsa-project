import styled from 'styled-components';

export const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  min-height: 200vh;
  left: 50%;
  top: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);

  z-index: -1;

  background: linear-gradient(45deg, rgba(42, 74, 228, 0.19), rgba(0, 22, 129, 0.314));
`;