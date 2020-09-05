import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfosHeader from '../components/InfosHeader';

function Prontuario() {
  return (
    <div>
      <Header title="Prontuário Eletrônico" />
      <div>
        <InfosHeader />
      </div>
      <Footer />
    </div>
  )
}

export default Prontuario;
