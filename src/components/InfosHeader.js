import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FusionMedContext } from '../context';

function InfosHeader() {
  const { pacient } = useContext(FusionMedContext);
  return (
    <div>
      <div>
        <Image src={pacient.thumbnail} roundedCircle alt="Imagem do paciente" />
      </div>
      <div>
        <h2>{pacient.name}</h2>
        <h5>Nº Carteirinha: {pacient.planNumber}</h5>
      </div>
    </div>
  )
}

export default InfosHeader;
