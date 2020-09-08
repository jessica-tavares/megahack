import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfosHeader from '../components/InfosHeader';
import CardAgendamento from '../components/CardAgendamento';

function Prontuario() {
  return (
    <div>
      <Header title="Prontuário Eletrônico" />
      <div>
        <InfosHeader />
      </div>
      <CardAgendamento date="10 Set" time="10:00" doctor="Dra. Amanda Barbosa" especiality="Clínico Geral" />
      <CardAgendamento date="16 Set" time="13:00" doctor="Dra. Jéssica Tavares" especiality="Cardiologistal" />
      <CardAgendamento date="23 Set" time="14:00" doctor="Dra. Flavia Firmino" especiality="Neurologista" />
      <CardAgendamento date="25 Set" time="09:00" doctor="Dra. Vitória Arruda" especiality="Endricnologia" />
      <Footer />
    </div>
  )
}

export default Prontuario;
