import React from 'react';
import { Box } from '../src/components/layout/Box';
import Cover from '../src/components/common/Cover';
import Menu from '../src/components/navigation/Menu';
import ProjectBox from '../src/components/common/ProjectBox';
import Footer from '../src/components/common/Footer';
import Highlight from '../src/components/layout/Highlight';
import SectionTitle from '../src/components/common/SectionTitle';

export default function Home() {
  return (
    <Box>
      <Menu />
      <Cover />
      <SectionTitle />
      <Highlight />
      <ProjectBox />
      <Footer />
    </Box>
  );
}
