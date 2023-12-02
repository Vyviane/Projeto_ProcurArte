//import { useState } from "react";

import "../styles/login.scss";
import "../styles/globals.scss";

import Input from "../components/Input";
import { Link } from "react-router-dom";


const Login = () =>{


  return (
    <div className="containerL">
      <div className="contentL">
        <div className="wrapL">
          <div className="col1L">
            <div className="logo">
              <h2 className="logoL">ProcurArte</h2>
            </div>
            <div className="inputsL">
              <Input text="Email" type="text" size="medium" id="email"/>
              <Input text="Senha" type="password" size="medium" id="senha"/>
            </div>
            <div className="buttonsLR">
              <button className="entrar">Entrar</button>
              <button className="loginGoogle">
                <img src="../Imagens/google.svg" alt="" className="googleSVG" />
              </button>
            </div>
            <p>
              Não tem conta? Faça <Link to="/register">cadastro aqui</Link>
            </p>
          </div>
          <div className="col2">imagem muito bonita aqui</div>
        </div>
      </div>
    </div>
  );
}
export default Login;