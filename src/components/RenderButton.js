import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const RenderButton = ({ isDisabled, children, ...props }) => {
  if (isDisabled) {
    return <Button {...props} disabled>{children}</Button>;
  }
  return <Button {...props}>{children}</Button>;
};

RenderButton.propTypes = {
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

RenderButton.defaultProps = {
  isDisabled: false,
};

export default RenderButton;