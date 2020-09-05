import React, { useContext } from 'react';
import { Image, Container } from 'react-bootstrap';
import { FusionMedContext } from '../context';
import '../style/AuxiliarStyle.css'

function InfosHeader({ plano }) {
  const { pacient } = useContext(FusionMedContext);
  return (
    <Container className="header-info">
      <div>
        <Image src={pacient.img_profile} roundedCircle alt="Imagem do paciente" className="header-picture" />
      </div>
      <div>
        <h2 className="header-name">{pacient.name}</h2>
        <h5>Nº Carteirinha: {pacient.card_number}</h5>
        {(plano) && <h5>Plano: {pacient.plan_type}</h5>}
      </div>
    </Container>
  )
}

export default InfosHeader;
