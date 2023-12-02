import "../styles/register.scss";
import Input from "../components/Input";
import { Link } from "react-router-dom";
export default function register() {
  return (
    <div className="containerR">
      <div className="contentR">
        <div className="wrapR">
          <div className="col1R">
            <div className="logo">
              <h2 className="logoL">ProcurArte</h2>
            </div>
            <div className="inputsR">
              <Input
                text="Email"
                type="text"
                size="large"
              />
              <Input
                text="Nome completo"
                type="text"
                size="large"
              />
              <div className="smallInputSide">
                <Input
                  text="Senha"
                  type="password"
                  size="small"
                />
                <Input
                  text="Repetir senha"
                  type="password"
                  size="small"
                />
              </div>
              <div className="smallInputSide">
                <Input
                  text="Telefone"
                  type="number"
                  size="small"
                />
                <Input
                  text="CPF"
                  type="number"
                  size="small"
                />
              </div>
            </div>
            <div className="buttonsLR">
              <button className="entrarR">Entrar</button>
              <button className="loginGoogle">
                <img src="../Imagens/google.svg" alt="" className="googleSVG" />
              </button>
            </div>
            <p className="linkFooter">
              Já tem uma conta? Faça <Link to="/login">login aqui</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
