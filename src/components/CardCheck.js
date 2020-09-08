import React from 'react';
import { Container, Figure } from 'react-bootstrap';
import '../style/AuxiliarStyle.css';

function CardCheck({title, measure, image}) {
  return (
    <Container className="card-check">
      <div className="check-figure">
        <Figure.Image src={require(`../images/${image}`)} alt={title} />
      </div>
      <div className="check-text">
        <h2 className="header-name left">{title}</h2>
        <p className="add-info left">{measure}</p>
      </div>
    </Container>
  )
}

export default CardCheck
