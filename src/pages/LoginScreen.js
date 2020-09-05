import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Container, Image } from 'react-bootstrap';
import '../style/AuxiliarStyle.css';
import { FusionMedContext } from '../context';
import logo from '../images/logo.jpeg';
import RenderButton from '../components/RenderButton';
import RenderInput from '../components/RenderInput';
import axios from "axios";

function verifyFields(PacientNumber, password) {
  let valid = false;
  let disable = true;

  if ( PacientNumber.length > 0 ) {
    valid = true;
  }
  if (password.length > 5 && valid) {
    disable = false;
  }
  return disable;
}

function LoginScreen() {
  let history = useHistory();
  const [disableButton, setDisableButton] = useState(true);
  const [PacientNumber, setPacienteNumber] = useState('');
  const [password, setPassword] = useState('');
  const { setPacient, pacient } = useContext(FusionMedContext);
  const PACIENT_ENDPOINT = "https://fusion-med.herokuapp.com/api/accounts/pacients/";

  useEffect(() => {
    setDisableButton(verifyFields(PacientNumber, password));
  }, [PacientNumber, password]);

  const onLoginClick = async() => {
    await axios
      .get(`${PACIENT_ENDPOINT}${PacientNumber}`)
      .then(response => setPacient(response.data))
      .catch(error => console.log(error));
    if (pacient) return history.push('/home') //  && pacient.password === password
    else return alert('Paciente não encontrado!')
  }

  return (
    <Container fluid className="justify-content-sm-center div-container">
      <Image src={logo} alt="Logo fusion Med" rounded fluid className="login-image" />
      <Form.Group xs="auto">
        <RenderInput
          type="PacientNumber"
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
          onClick={() => onLoginClick()}
          >
          Login
        </RenderButton>
        <p>Novo?<span variant="link">Crie uma conta agora!</span></p>
      </Form.Group>
    </Container>
  );
}

export default LoginScreen;
