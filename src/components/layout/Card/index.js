import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text/index';
import { CardWrapper } from './styles';

export default function Card({
  url, title, alt, href,
}) {
  return (
    <>
      <CardWrapper>
        <CardWrapper.Image src={url} alt={alt} />
        <Text
          href={href}
          variant="title"
          tag="h1"
          color="light.tertiary.main"
        >
          {title}
        </Text>
      </CardWrapper>
    </>
  );
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
