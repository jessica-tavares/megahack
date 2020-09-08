import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfosHeader from '../components/InfosHeader';
import '../style/AuxiliarStyle.css';

function Agendamento() {
  const [doctorHability, setDoctorHability] = useState(true);
  const [dateHabilit, setDateHabilit] = useState(true)
  const [timeHability, setTimeHability] = useState(true);
  const especialits = ['Alergia e Imunologia', 'Anestesiologia', 'Angiologia', 'Cardiologia',
    'Clínica Médica', 'Demartologia', 'Endrocnologia', 'Endoscopia', 'Geriatria', 'Ginecologia',
    'Infectologia', 'Neurologia', 'Nutrologia', 'Pediatria', 'Psiquiatria', 'Reumatologia'];
  const doctors = ['Antonieta Costa', 'Maria Aparecida', 'Joana Fernandes', 'Juliana Hernandez'];
  
  const consult = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

    return (
    <div>
      <Header title="Agendamentos" />
      <InfosHeader />
      <h2 className="agendamento-label">Nova Agendamento</h2>
      <Form className="body-form">
        <Form.Group>
          <Form.Label className="agendamento-label">Especialidade</Form.Label>
          <Form.Control as="select" defaultValue="Especialidade" onClick={() => setDoctorHability(false)}>
            <option>Especialidade</option>
            {especialits.map((esp, index) => <option key={index}>{esp}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="agendamento-label">Profissonal</Form.Label>
          <Form.Control as="select" disabled={(doctorHability)} defaultValue="Medico" onClick={() => setDateHabilit(false)}>
            <option>Profissonal</option>
            {doctors.map((doc, index) => <option key={index}>{doc}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label className="agendamento-label">Data</Form.Label>
          <Form.Control type="date" disabled={(dateHabilit)} onClick={() => setTimeHability(false)} />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label className="agendamento-label">Horário</Form.Label>
          <TimePicker start="10:00" end="18:00" step={30} disabled={(timeHability)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => consult(e)}>Marcar</Button>
      </Form>
      <Footer />
    </div>
  )
}

export default Agendamento;
