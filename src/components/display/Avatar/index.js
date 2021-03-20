import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Wrapper } from './styles/styles';

const Avatar = ({ imgUrl }) => (

  <Wrapper>

    <Wrapper.Avatar objectFit="contain">
      <Image src={imgUrl} layout="fill" />
    </Wrapper.Avatar>

  </Wrapper>
);

Avatar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default Avatar;
