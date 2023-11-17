import "../styles/login.scss";
import Input from "../components/Input";
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
              <Input text="Email" type="text" size="medium" />
              <Input text="Senha" type="password" size="medium" />
            </div>
            <button>Entrar</button>
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
