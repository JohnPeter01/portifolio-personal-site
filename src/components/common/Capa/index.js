import React from 'react';
import Image from 'next/image';
import { Grid } from '../../foundation/Layout/Grid';
import Text from '../../foundation/Text';
import { CapaWrapper } from './styles/style';
import { Box } from '../../foundation/Layout/Box';
import Avatar from '../Avatar';

const Capa = () => (
  <CapaWrapper objectFit="cover">
    <Image src="/images/cover.jpg" alt="Imagem de Capa" layout="fill" />
    <Grid.Container>
      <Grid.Col
        height="100vh"
        value={{ xs: 12, md: 12 }}
        offset={{ xs: 0, md: 0 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          padding="24px"
          background=" radial-gradient(ellipse at 45px 45px , rgba(0, 255, 255, 10) 7%, rgba(0, 0, 255, 0.5) 50%, #0000FF 95%);"
          opacity="0.95"
          borderRadius="5px"
        >
          <Avatar
            imgUrl="/images/avatar.png"
            display="flex"
            alignContent="center"
            justifyContent="center"
          />
          <Text
            variant="title"
            tag="h1"
              // textAlign="right"
            textAlign={{
              xs: 'center',
              md: 'center',
            }}
            color="light.tertiary.main"
          >
            João Pedro
          </Text>
          <Text
            variant="title"
            tag="h2"
            textAlign={{
              xs: 'center',
              md: '',
            }}
            color="light.tertiary.main"
          >
            Front-end Developer
          </Text>
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
              <JavascriptIcon />
              <ReactIcon />
              <NextIcon />
              <StyledIcon />
              <TailwindIcon />
            </div> */}
        </Box>
      </Grid.Col>
    </Grid.Container>
  </CapaWrapper>

);

export default Capa;
