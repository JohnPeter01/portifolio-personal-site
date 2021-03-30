import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import typographyVariants from '../../../../theme/TypographyVariants';

export const HighlightWrapper = styled.a`
height: auto;
border-radius: 5px;
border: 1px solid #c1c1c1;
padding: 10px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
border-radius: 5px;
flex: 1 350px;
transition: all 200ms linear;
cursor: pointer;
margin-bottom: 24px;
text-decoration: none;
${breakpointsMedia({
    md: css`
display: flex;
align-items: center;
`,
  })}
&:hover {
transform: scale(0.98) translateY(-5px);
box-shadow: 0 3px 25px rgba(0, 0, 0, 0.4);
border-radius: 0;
}
`;

HighlightWrapper.Image = styled.img`
max-width: 100%;
object-fit: cover;
border-radius: 5px;
${breakpointsMedia({
    md: css`
height: 250px;
`,
  })}
`;

HighlightWrapper.Footer = styled.div`
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

HighlightWrapper.Description = styled.div`
padding: 10px;
& h2 {
margin-bottom: 24px;
}
`;

HighlightWrapper.Text = styled.p`
font-size: ${() => typographyVariants.paragraph2.fontSize};
font-weight: ${() => typographyVariants.paragraph2.fontWeight};
line-height : ${() => typographyVariants.paragraph2.lineHeight};
`;
