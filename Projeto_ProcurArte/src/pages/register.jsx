import "../styles/register.scss";
import Input from "../components/Input";
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
              <Input text="Nome completo" type="text" size="large" placeholder="josé geraldo da silva"/>
              <div className="smallInputSide">
                <Input text="Senha" type="password" size="small" placeholder="Sua senha"/>
                <Input text="Repetir senha" type="password" size="small" placeholder="Sua senha denovo"/>
              </div>
              <div className="smallInputSide">
                <Input text="Telefone" type="number" size="small" placeholder="(00) 12345-6789"/>
                <Input text="CPF" type="number" size="small" placeholder="123.456.789-00"/>
              </div>
            </div>
            <button>Entrar</button>
          </div>
        </div>
        <img
          className="image1R"
          src="../Imagens/image1.svg"
          alt="Imagens ilustrativa de musicos com seus respectivos instrumento,piano, bateria, cello, trompete e um vocalista"
        />
      </div>
    </div>
  )
}
