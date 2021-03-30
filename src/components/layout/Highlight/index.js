import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text/index';
import { HighlightWrapper } from './styles';

function Highlight({
  url, title, alt, description, href, variant, ...props
}) {
  return (
    <>
      <HighlightWrapper href={href}>
        <HighlightWrapper.Image src={url} alt={alt} />
        <HighlightWrapper.Footer>
          <HighlightWrapper.Description>
            <Text
              tag="h1"
              variant="title"
              color="light.tertiary.main"
              target="_blank"
              {...props}
            >
              {title}
            </Text>
            <Text
              tag="h2"
              variant="paragraph1"
              color="light.tertiary.main"
            >
              {description}
            </Text>
          </HighlightWrapper.Description>
        </HighlightWrapper.Footer>
      </HighlightWrapper>
    </>
  );
}

Highlight.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Highlight;
