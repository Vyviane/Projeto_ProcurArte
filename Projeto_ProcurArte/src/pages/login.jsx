import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import "../styles/globals.scss";
import Input from "../components/Input";
import { toast } from "react-toastify";
import { AuthEndpoint } from "../services/authService";
const api = new AuthEndpoint();


const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    try {
      const responseData = await api.login(email, senha);

      console.log(responseData);
    } catch (error) {
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                text="Senha"
                type="password"
                size="medium"
                id="senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="buttonsLR">
              <button className="entrar" onClick={handleLogin}>
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
