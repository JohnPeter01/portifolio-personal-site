import styled, { css } from 'styled-components';

export const CapaWrapper = styled.div`
  ${({ objectFit }) => css`
    position: relative;
    width: 100vw;
    height: 100vh;
    img {
      object-fit: ${objectFit};
    }
  `}
`;
