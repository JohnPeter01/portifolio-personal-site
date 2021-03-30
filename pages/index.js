import React from 'react';
import { Box } from '../src/components/layout/Box';
import Cover from '../src/components/common/Cover';
import Menu from '../src/components/navigation/Menu';
import ProjectBox from '../src/components/common/ProjectBox';
import Footer from '../src/components/common/Footer';

export default function Home() {
  return (
    <Box>
      <Menu />
      <Cover />
      <ProjectBox />
      <Footer />
    </Box>

  );
}
