import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';

function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Figure.Image src={require('../images/logo.jpeg')} width={41} height={37} alt="Logomarca FusionMed" />
    </div>
  )
}


Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
