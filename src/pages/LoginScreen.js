import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Container, Image } from 'react-bootstrap';
import '../style/AuxiliarStyle.css';
import FusionMedContext from '../context';
import logo from '../images/logo.jpeg';
import RenderButton from '../components/RenderButton';
import RenderInput from '../components/RenderInput';
import getPacientData from '../services/api';

function verifyFields(PacienteNumber, password) {
  let valid = false;
  let disable = true;

  if ( PacienteNumber.length > 6 ) {
    valid = true;
  }
  if (password.length > 6 && valid) {
    disable = false;
  }
  return disable;
}

function LoginScreen() {
  const [disableButton, setDisableButton] = useState(true);
  const [PacienteNumber, setPacienteNumber] = useState('');
  const [password, setPassword] = useState('');
  const { setPacient, pacient } = useContext(FusionMedContext);

  useEffect(() => {
    setDisableButton(verifyFields(PacienteNumber, password));
  }, [PacienteNumber, password]);

  const onLoginClick = async() => {
    if(PacienteNumber.length > 0) await getPacientData(PacienteNumber).then(
      (apiData) => setPacient(apiData)
    )
    if (pacient.length > 0) return <Redirect to="/home" />
  }

  return (
    <Container fluid sm className="justify-content-sm-center div-container">
      <Image src={logo} alt="Logo fusion Med" rounded fluid className="login-image" />
      <Form.Group xs="auto">
        <RenderInput
          type="PacienteNumber"
          onChange={(e) => setPacienteNumber(e.target.value)}
          placeholder="Nº Carteirinha"
          required
          size="30"
          className="input col-5"
        />
        <RenderInput
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
          size="30"
          className="input col-7"
        />
        <Form.Text id="passwordHelpBlock" muted>Esqueceu a senha?</Form.Text>
        <br />
        <RenderButton
          type="button"
          disabled={disableButton}
          size="lg" variant="primary" className="med button"
          onClicck={() => onLoginClick}
          >
          Login
        </RenderButton>
        <p>Novo?<span variant="link">Crie uma conta agora!</span></p>
      </Form.Group>
    </Container>
  );
}

export default LoginScreen;
