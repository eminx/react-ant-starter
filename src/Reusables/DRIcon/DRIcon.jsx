import React from 'react';
import PropTypes from 'prop-types';

const DRIcon = props => (
  <svg width="22" height="22" viewBox="0 0 1024 1024">
    <path d={props.icon}></path>
  </svg>
);

DRIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default DRIcon;