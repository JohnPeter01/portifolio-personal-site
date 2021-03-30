import React from 'react';
import { Flex } from '../../layout/Flex';
import { Box } from '../../layout/Box';
import Text from '../../foundation/Text';
import { NextIcon } from '../../display/Icons';

const Menu = () => (
  <Box
    width="100vw"
    height="80px"
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
        <NextIcon />
      </div>
    </Flex.Container>
    <Flex.Container
      display="flex"
      gap={100}
      justifyContent="center"
      alignItems="center"
      width="100vw"
    >
      <Text
        tag="a"
        herf="#"
        variant="title"
        color="light.tertiary.main"
      >
        Projetos
      </Text>
      <Text
        tag="a"
        herf="#"
        variant="title"
        color="light.tertiary.main"
      >
        Sobre
      </Text>
    </Flex.Container>
  </Box>
);

export default Menu;
