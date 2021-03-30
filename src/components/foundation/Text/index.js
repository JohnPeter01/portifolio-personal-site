import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';
// import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const title = css`
  ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
  `}
`;

const sectionTitle = css`
  ${({ theme }) => css`
        font-size: ${theme.typographyVariants.sectionTitle.fontSize};
        font-weight: ${theme.typographyVariants.sectionTitle.fontWeight};
        line-height: ${theme.typographyVariants.sectionTitle.lineHeight};
  `}
`;

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  title,
  paragraph1,
  smallestException,
  sectionTitle,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;

export default function Text({
  variant,
  children,
  herf,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      herf={herf}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'title',
  herf: '#',
  children: null,
};

Text.propTypes = {
  children: PropTypes.node,
  herf: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['title', 'sectionTitle', 'paragraph1']),
};
