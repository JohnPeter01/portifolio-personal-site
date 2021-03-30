import React from 'react';
import Image from 'next/image';
import { Grid } from '../../layout/Grid';
import Text from '../../foundation/Text';
import { CoverWrapper } from './styles/style';
import { Box } from '../../layout/Box';
import Avatar from '../../display/Avatar';
import {
  JavascriptIcon, NextIcon, ReactIcon, StyledIcon, TailwindIcon,
} from '../Icons';

const Cover = () => (
  <CoverWrapper>
    <Image
      src="/images/capa.jpg"
      alt="Imagem de Capa"
      layout="fill"
    />
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <JavascriptIcon />
            <ReactIcon />
            <NextIcon />
            <StyledIcon />
            <TailwindIcon />
          </div>
        </Box>
      </Grid.Col>
    </Grid.Container>
  </CoverWrapper>

);

export default Cover;
