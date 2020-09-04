import React, { useContext } from 'react';
import { FusionMedContext } from '../context';
import '../style/AuxiliarStyle.css';

function AdditionalPacientInfo() {
  const { pacient } = useContext(FusionMedContext);
  return (
    <div className="additional-info">
      <h5>{pacient.sex}</h5>
      <h5>{pacient.birth}</h5>
      <h5>{pacient.weigth}kg</h5>
      <h5>{pacient.bloodType}</h5>
    </div>
  )
}

export default AdditionalPacientInfo;
