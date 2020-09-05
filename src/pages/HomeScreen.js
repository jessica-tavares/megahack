import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfosHeader from '../components/InfosHeader';
import AdditionalPacientInfo from '../components/AdditionalPacientInfo';

function HomeScreen() {
  return (
    <Container>
      <Header title=" " />
      <div>
        <InfosHeader plano/>
        <div>
          <AdditionalPacientInfo />
        </div>
      </div>
      
      <Footer />
    </Container>
  )
}

export default HomeScreen
