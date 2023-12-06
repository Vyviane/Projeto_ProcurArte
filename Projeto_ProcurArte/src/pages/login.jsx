import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import "../styles/globals.scss";
import Input from "../components/Input";
import { toast } from "react-toastify";
import { AuthEndpoint } from "../services/authService";
import { useNavigate } from "react-router-dom";

const api = new AuthEndpoint();

const Login = () => {
  const nav = useNavigate()
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const handleLogin = async (email, password) => {

      try {
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
          return
        }

        const response = await api.login(email,password)

        console.log(response)

        localStorage.setItem('user',JSON.stringify(response))

        toast.success("Login realizado com sucesso!")
        nav('/dashboard')

      } catch(error) {
        toast.error("Login invalido. Por favor, tente novamente.");
        toast.error("Erro ao fazer login:", error);
      }
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
              <Input
                text="Email"
                type="text"
                size="medium"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                text="Senha"
                type="password"
                size="medium"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="buttonsLR">
              <button className="entrar" onClick={() =>handleLogin(email,senha)}>
                Entrar
              </button>
            </div>
            <p className="linkFooter">
              Não tem conta? Faça seu <Link to="/register">  cadastro aqui</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
