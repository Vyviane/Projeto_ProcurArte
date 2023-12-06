//import { useState } from "react";

import "../styles/login.scss";
import "../styles/globals.scss";

import Input from "../components/Input";
import { Link } from "react-router-dom";
import { AuthEndpoint } from "../services/authService";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

const api = new AuthEndpoint();

const Login = () =>{

  const nav = useNavigate()
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (email, password) => {

    console.log(email,password)

    const isValid = []

    if(!email) {
      isValid.push("E-mail é obrigatório.")
    }

    if(!password) {
      isValid.push("Senha é obrigatório.")
    }

    if(isValid.length > 0) {
      isValid.forEach((message) => toast.error(message))
    }

    const response = await api.login(email,password)

    if(response.status !== 200) {
      toast.error("Usuário inválido")
    }

    console.log(response)

    localStorage.setItem('user',JSON.stringify(response))

    toast.success("Login realizado com sucesso!")
    nav('/dashboard')

  }

  return (
    <div className="containerL">
      <div className="contentL">
        <div className="wrapL">
          <div className="col1L">
            <div className="logo">
              <h2 className="logoL">ProcurArte</h2>
            </div>
            <div className="inputsL">
              <input value={email} onChange={ (e) => setEmail(e.target.value)} />
              <input value={password} onChange={ (e) => setPassword(e.target.value)} />
            </div>
            <div className="buttonsLR">
              <button className="entrar" onClick={() => handleLogin(email, password)}>Entrar</button>
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