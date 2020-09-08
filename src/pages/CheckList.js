import React from 'react';
import { Form } from 'react-bootstrap';
import '../style/AuxiliarStyle.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfosHeader from '../components/InfosHeader';

function CheckList() {
  return (
    <div>
      <Header title="Minha Saúde Diária" />
      <InfosHeader />
      <Form>
        <Form.Row className="input-line">
          <Form.Check className="inline-inputs" type="checkbox" />
          <Form.Label className="inline-inputs" sm="auto">Pressão</Form.Label>
          <Form.Control className="text-input inline-inputs" sm="auto" type="input" />
        </Form.Row>
        <Form.Row className="input-line">
          <Form.Check className="inline-inputs" type="checkbox" />
          <Form.Label className="inline-inputs" sm="auto">Temperatura</Form.Label>
          <Form.Control className="text-input inline-inputs" sm="auto" type="input" />
        </Form.Row>
        <Form.Row className="input-line">
          <Form.Check className="inline-inputs" type="checkbox" />
          <Form.Label className="inline-inputs" sm="auto">Beber água</Form.Label>
          <Form.Control className="text-input inline-inputs" sm="auto" type="input" />
        </Form.Row>
        <Form.Row className="input-line">
          <Form.Check className="inline-inputs" type="checkbox" />
          <Form.Label className="inline-inputs" sm="auto">Tomar medicação</Form.Label>
          <Form.Control className="text-input inline-inputs" sm="auto" type="input" />
        </Form.Row>
        <Form.Row className="input-line">
          <Form.Check className="inline-inputs" type="checkbox" />
          <Form.Label className="inline-inputs" sm="auto">Batimento Cardiaco</Form.Label>
          <Form.Control className="text-input inline-inputs" sm="auto" type="input" />
        </Form.Row>
        <Form.Row className="input-line">
          <Form.Check className="inline-inputs" type="checkbox" />
          <Form.Label className="inline-inputs" sm="auto">Quantidade de passos</Form.Label>
          <Form.Control className="text-input inline-inputs" sm="auto" type="input" />
        </Form.Row>
        <Form.Row className="input-line">
          <Form.Check className="inline-inputs" type="checkbox" />
          <Form.Label className="inline-inputs" sm="auto">Adicionar Novo</Form.Label>
          <Form.Control className="text-input inline-inputs" sm="auto" type="input" />
        </Form.Row>
      </Form>
      <Footer />
    </div>
  )
}

export default CheckList;
