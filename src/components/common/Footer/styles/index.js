import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const FooterWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.primary.main.color};
  height: 60px;
  margin-top: 10px;
  ${breakpointsMedia({
    md: css`
      margin-top: 20px;
    `,
  })}
`;

export default FooterWrapper;
