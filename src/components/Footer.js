import React from 'react';
import { Link } from 'react-router-dom';
import { Figure, Container } from 'react-bootstrap';
import '../style/AuxiliarStyle.css';

function Footer() {
  return (
    <Container className="footer">
      <div aria-label="First group">
        <Link to="/home">
          <Figure.Image src={require('../images/home.png')} className="icon" alt="Acesso a home screen" />
        </Link>
      </div>
      <div aria-label="Second group">
        <Link to="/prontuario">
          <Figure.Image src={require('../images/prontuario.png')} className="icon" alt="Acesso ao prontuário eletrônico" />
        </Link>
      </div>
      <div aria-label="Third group">
        <Link to="/agendamentos">
          <Figure.Image src={require('../images/horarios.jpg')} className="icon" alt="Acesso aos agendamentos de consultas" />
        </Link>
      </div>
      <div aria-label="Fourth group">
        <Link to="/check-list">
          <Figure.Image src={require('../images/check.png')} className="icon" alt="Acesso a pagina de check list diário" />
        </Link>
      </div>
      <div aria-label="Fifth group">
        <Link to="/profile">
          <Figure.Image src={require('../images/perfil.png')} className="icon" alt="Acesso a pagina de configurações e perfil" />
        </Link>
      </div>
    </Container>
  );
}

export default Footer;
