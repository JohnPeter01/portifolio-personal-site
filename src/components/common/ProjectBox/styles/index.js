import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const WrapperProjects = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  margin-top: 28px;
  border-radius: 10px;
  flex-direction: column;
  text-align: center;
  div {
    order: initial;
    margin-top: 10px;
    ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })}
  div + div {
    order: initial;
    margin-top: 10px;
    ${breakpointsMedia({
    md: css`
      order: 1;
    `,
  })}
  }
}
`;
