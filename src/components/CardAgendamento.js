import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/AuxiliarStyle.css';

function CardAgendamento({date, time, doctor, especiality}) {
  return (
    <Container className="cardAg-container">
      <div className="card-border">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div>
        <div>
          <h2 className="header-name">{doctor}</h2>
          <p className="add-info">{especiality}</p>
        </div>
      </div>
    </Container>
  )
}

export default CardAgendamento;
