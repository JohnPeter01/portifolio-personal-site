import React from 'react';
import { LinkedInIcon, GitHubIcon } from '../../display/Icons';

import { FooterWrapper } from './styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <GitHubIcon />
      <LinkedInIcon />
    </FooterWrapper>
  );
}
