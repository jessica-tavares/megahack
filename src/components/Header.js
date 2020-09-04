import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';
import '../style/AuxiliarStyle.css';

function Header({ title }) {
  return (
    <div className="header">
      <h2 className="header-title">{title}</h2>
      <Figure.Image src={require('../images/logo.jpeg')} width={41} height={37} alt="Logomarca FusionMed" />
    </div>
  )
}


Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
