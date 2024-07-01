import React, { useRef } from 'react';
import { LoginTitle, ContainerBody, ContainerLogin, Input, Button, Label } from './LoginComponents';
import axios from 'axios';

function Login() {
  const inputSenha = useRef('');
  const inputEmail = useRef('');

  async function submitLogin(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const email = inputEmail.current.value;
    const senha = inputSenha.current.value;

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email: email,
        password: senha,
      });
      console.log(response);
    } catch (e) {
      const responseErro = JSON.parse(e.request.responseText);
      alert(responseErro.message)
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
        <Button type="submit" onClick={submitLogin}>Entrar</Button> {/* Mantenha o tipo de botão como 'submit' */}
      </ContainerLogin>
    </ContainerBody>
  );
}

export default Login;
