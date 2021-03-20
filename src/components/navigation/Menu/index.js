import React from 'react';
import { Flex } from '../../layout/Flex';
import { Box } from '../../layout/Box';
import { Button } from '../../form/Button';

const Menu = () => (
  <Box
    width="100vw"
    height="90px"
    boxShadow="inset 0 0 1em gold"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Flex.Container
      width="100vw"
      alignItems="center"
    >
      <div
        style={{
          marginLeft: '45px',
        }}
      >
        Button 1
      </div>
    </Flex.Container>
    <Flex.Container
      display="flex"
      gap={50}
      justifyContent="flex-end"
      alignItems="center"
      width="100vw"
    >
      <Button
        ghost
        variant="light.primary.main"
      >
        Button 2
      </Button>
      <Button
        ghost
        variant="light.primary.main"
      >
        Button 3
      </Button>
    </Flex.Container>
  </Box>
);

export default Menu;
