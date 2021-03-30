import styled, { css } from 'styled-components';

export const CoverWrapper = styled.div`
  ${({ objectFit, borderImage }) => css`
    position: relative;
    width: 100vw;
    height: 100vh;
    img {
      object-fit: ${objectFit};
      border: ${borderImage};
    }
  `}
`;
