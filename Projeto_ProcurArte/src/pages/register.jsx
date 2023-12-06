import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.scss";
import Input from "../components/Input";
import { AuthEndpoint } from "../services/authService";
import { toast } from "react-toastify";
const api = new AuthEndpoint();


export default function Register() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");



  const handleRegister = async () => {
    try {
      const responseData = await api.RegisterEndpoint(
      );
      toast.success("Conta criada com sucesso!");
      console.log(responseData);
    } catch (error) {
      toast.error("Erro ao criar conta. Por favor, tente novamente.", error);
    }
  };

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
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                text="Nome completo"
                type="text"
                size="large"
                onChange={(e) => setFullName(e.target.value)}
              />
              <div className="smallInputSide">
                <Input
                  text="Senha"
                  type="password"
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  text="Repetir senha"
                  type="password"
                  size="small"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              <div className="smallInputSide">
                <Input
                  text="Telefone"
                  type="number"
                  size="small"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  text="CPF"
                  type="number"
                  size="small"
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>
            </div>
            <div className="buttonsLR">
              <button className="entrarR" onClick={handleRegister}>
                Entrar
              </button>
              {/* <button className="loginGoogle">
                <img
                  src="../Imagens/google.svg"
                  alt=""
                  className="googleSVG"
                />
              </button> */}
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
