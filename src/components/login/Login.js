import React, { useRef } from 'react';
import { LoginTitle, ContainerBody, ContainerLogin, Input, Button, Label } from '../../styles/LoginComponents';
import { setCookie } from '../../utils/cookieUtils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const inputSenha = useRef('');
  const inputEmail = useRef('');

  async function submitLogin(event) {
    event.preventDefault();

    const email = inputEmail.current.value;
    const senha = inputSenha.current.value;

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email: email,
        password: senha,
      });
      const accessToken  = response.data.access_token;

      setCookie('token', accessToken, 1,'/')
      const navigate = new useNavigate()
      navigate("/teste")
    } catch (e) {
      const responseErro = JSON.parse(e.request.responseText);
      const spanMsg = document.getElementById('message');
      spanMsg.innerHTML = "<p style='color:red;'>"+responseErro.message+"<p/>";
    }
  }

  return (
    <ContainerBody>
      <ContainerLogin>
        <LoginTitle>Seja Bem Vindo</LoginTitle>
        <Label htmlFor='email'>Email</Label>
        <Input type="text" ref={inputEmail} id='email' name="Email" placeholder='Seu Email' />
        <Label htmlFor='senha'>Senha</Label>
        <Input type="password" ref={inputSenha} id='senha' name="password" placeholder='Sua Senha' />
        <span id='message'></span>
        <Button type="submit" onClick={submitLogin}>Entrar</Button> {/* Mantenha o tipo de botão como 'submit' */}
      </ContainerLogin>
    </ContainerBody>
  );
}

export default Login;
