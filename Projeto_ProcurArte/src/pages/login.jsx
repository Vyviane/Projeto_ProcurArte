import "../styles/login.scss";
import Input from "../components/Input";
import { Link } from "react-router-dom"
export default function login() {
  return (
    <div className="containerL">
      <div className="contentL">
        <div className="wrapL">
          <div className="col1L">
            <div className="logo">
              <img src="../Imagens/logo.svg" alt="" />
            </div>
            <div className="inputsL">
              <Input text="Email" type="text" size="large" />
              <Input text="Senha" type="password" size="large" />
            </div>
            <div className="buttonsLR">
              <button className="entrar">Entrar</button>
              <button className="loginGoogle">
                <img src="../Imagens/google.svg" alt="" className="googleSVG" />
              </button>
            </div>
            <p>Não tem conta? Faça <Link to="/register">cadastro aqui</Link></p>
          </div>
        </div>
        <img
          className="image1L"
          src="../Imagens/image1.svg"
          alt="Imagens ilustrativa de musicos com seus respectivos instrumento,piano, bateria, cello, trompete e um vocalista"
        />
      </div>
    </div>
  );
}
