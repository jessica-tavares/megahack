import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfosHeader from '../components/InfosHeader';
import AdditionalPacientInfo from '../components/AdditionalPacientInfo';
import CardCheck from '../components/CardCheck';

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
      <div className="home-content">
        <h1 className="header-title left">Status de Saúde</h1>
        <CardCheck title="Teperatura do corpo" measure="38.7 ºC" image="temp.jpeg" />
        <CardCheck title="Pressão arterial" measure="12/8" image="pressuere.jpeg" />
        <CardCheck title="Batimentos Cardiácos" measure="75 bpm" image="heart.jpeg" />
        <h1 className="header-title left">Não se Esqueça</h1>
        <CardCheck title="Vacinação" measure="20 Set" image="vacina.jpeg" />
        <CardCheck title="Comprar medicamento" measure="30 Out" image="pills.jpeg" />
      </div>
      <Footer />
    </Container>
  )
}

export default HomeScreen
