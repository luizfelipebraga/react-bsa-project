import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: 0;

  svg {
    position: relative;
    display: block;
    width: calc(226% + 1.3px);
    height: 90px;
    transform: rotateY(180deg);
  }
`;