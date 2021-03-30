import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import { Box } from '../../layout/Box';

const SectionTitle = ({ title }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    margin
  >
    <Text
      variant="sectionTitle"
      tag="h1"
      color="light.tertiary.main"
    >
      {title}
    </Text>
  </Box>
);

SectionTitle.defaultProps = {
  title: 'Title',
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
