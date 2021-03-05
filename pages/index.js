import React from 'react';
import { Box } from '../src/components/foundation/layout/Box';
// import GitHubCorner from '../src/components/common/GitHubCorner';
import Capa from '../src/components/common/Capa';
import Menu from '../src/components/common/Menu';
import Destaque from '../src/components/common/Destaque';
import BoxProjetos from '../src/components/common/BoxProjetos';
import Footer from '../src/components/common/Footer';

export default function Home() {
  return (
    <Box>
      {/* <GitHubCorner /> */}
      <Capa />
      <Menu />
      <Destaque />
      <BoxProjetos />
      <Footer />
    </Box>
  );
}
