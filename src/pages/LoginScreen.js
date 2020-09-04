import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Container, Image } from 'react-bootstrap';
import '../style/AuxiliarStyle.css';
import logo from '../images/logo.jpeg';
import RenderButton from '../components/RenderButton';
import RenderInput from '../components/RenderInput';

function verifyFields(email, password) {
  let valid = false;
  let disable = true;

  if ( email.length > 6 ) {
    valid = true;
  }
  if (password.length > 6 && valid) {
    disable = false;
  }
  return disable;
}

function LoginScreen() {
  const [disableButton, setDisableButton] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setDisableButton(verifyFields(email, password));
  }, [email, password]);

  return (
    <Container fluid sm className="justify-content-sm-center div-container">
      <Image src={logo} alt="Logo fusion Med" rounded fluid className="login-image" />
      <Form.Group xs="auto">
        <RenderInput
          type="email"
          onChange={(e) => setEmail(e.target.value)}
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
        <Link to="/home">
          <RenderButton
            type="button"
            disabled={disableButton}
            size="lg" variant="primary" className="med button"
            >
            Login
          </RenderButton>
        </Link>
        <p>Novo?<span variant="link">Crie uma conta agora!</span></p>
      </Form.Group>
    </Container>
  );
}

export default LoginScreen;
