import React from 'react';
import { Grid } from '../../layout/Grid';
import Text from '../../foundation/Text';
import { CoverWrapper } from './styles/style';
import { Box } from '../../layout/Box';
import Avatar from '../../display/Avatar';
import {
  JavaIcon, JavascriptIcon, NextIcon, ReactIcon, StyledIcon,
} from '../../display/Icons';

const Cover = () => (
  <CoverWrapper>
    <Grid.Container>
      <Grid.Col
        value={{ xs: 12, md: 12 }}
        offset={{ xs: 0, md: 0 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          padding="24px"
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <JavaIcon />
            <NextIcon />
            <JavascriptIcon />
            <ReactIcon />
            <StyledIcon />
          </div>
        </Box>
      </Grid.Col>
    </Grid.Container>
  </CoverWrapper>

);

export default Cover;
