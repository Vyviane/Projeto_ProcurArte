import "../styles/register.scss";
import Input from "../components/Input";
import { Link } from "react-router-dom"
export default function register() {
  return (
    <div className="containerR">
      <div className="contentR">
        <div className="wrapR">
          <div className="col1R">
            <div className="logo">
              <img src="../Imagens/logo.svg" alt="" />
            </div>
            <div className="inputsR">
              <Input text="Email" type="text" size="large" placeholder="exemplo@email.com" />
              <Input text="Nome completo" type="text" size="large" placeholder="josé geraldo da silva" />
              <div className="smallInputSide">
                <Input text="Senha" type="password" size="small" placeholder="Sua senha" />
                <Input text="Repetir senha" type="password" size="small" placeholder="Sua senha denovo" />
              </div>
              <div className="smallInputSide">
                <Input text="Telefone" type="number" size="small" placeholder="(00) 12345-6789" />
                <Input text="CPF" type="number" size="small" placeholder="123.456.789-00" />
              </div>
            </div>
            <div className="buttonsLR">
              <button className="entrar">Entrar</button>
              <button className="loginGoogle">
                <img src="../Imagens/google.svg" alt="" className="googleSVG" />
              </button>
            </div>
            <p>Já tem uma conta? Faça <Link to="/login">login aqui</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
