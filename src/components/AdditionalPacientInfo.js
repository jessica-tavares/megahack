import React, { useContext } from 'react';
import { FusionMedContext } from '../context';
import '../style/AuxiliarStyle.css';
// import { format } from 'date-fns';

function AdditionalPacientInfo() {
  const { pacient } = useContext(FusionMedContext);
  // const dateBirthFormated = format(pacient.birth_date, `dd/MM/yyyy`)
  return (
    <div className="additional-info">
      <h5>{pacient.gender}</h5>
      <h5>{pacient.birth_date_f}</h5>
      <h5>{pacient.weight}kg</h5>
      <h5>{pacient.blood_type}</h5>
    </div>
  )
}

export default AdditionalPacientInfo;
