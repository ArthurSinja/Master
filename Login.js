// src/pages/Login.js
import React from 'react';
import './Login.css'; // Estilos específicos da tela de login

const Login = () => {
  return (
    <div className="login-container">
      <h1>SocorroAi</h1>
      <div className="login-logo">
        <img src="path_to_logo_image" alt="Logo SocorroAi" />
      </div>
      <input type="email" placeholder="Email" className="login-input" />
      <input type="password" placeholder="Senha" className="login-input" />
      <button className="login-button">Entrar</button>
      <a href="/register" className="login-register-link">Criar uma conta</a>
    </div>
  );
};

export default Login;
