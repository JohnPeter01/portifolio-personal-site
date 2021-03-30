import styled from 'styled-components';
import get from 'lodash/get';
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo';
import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
import { NextDotJs } from '@styled-icons/simple-icons/NextDotJs';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';
import { Java } from '@styled-icons/simple-icons';

export const JavascriptIcon = styled(Javascript)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, 'colors.light.icon.main.color')};
  height: 39px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.light.primary.main.hover};
  }
`;

export const ReactIcon = styled(ReactLogo)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, 'colors.light.icon.main.color')};
  height: 39px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.light.primary.main.hover};
  }
`;

export const StyledIcon = styled(StyledComponents)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, 'colors.light.icon.main.color')};
  height: 39px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.light.primary.main.hover};
  }
`;

export const JavaIcon = styled(Java)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, 'colors.light.icon.main.color')};
  height: 39px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.light.primary.main.hover};
  }
`;

export const NextIcon = styled(NextDotJs)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, 'colors.light.icon.main.color')};
  height: 39px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.light.primary.main.hover};
  }
`;

export const LinkedInIcon = styled(Linkedin)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, 'colors.light.icon.main.color')};
  height: 39px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.light.icon.main.hover};
  }
`;

export const GitHubIcon = styled(Github)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, 'colors.light.icon.main.color')};
  height: 39px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.light.icon.main.hover};
  }
`;
