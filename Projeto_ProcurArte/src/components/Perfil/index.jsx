import P from "../CardPerfil";
import TextareaPerfil from "../CardPerfil/TextareaPerfil";
import "./style.scss";

export default function Perfil() {
  return (
    <div className="exibir-portifolio">
      <div className="first-s">
        <img src="../../Imagens/imageSergio.svg" className="img-perfil" />
        <h2>Sergio mauro</h2>
        <h5>Colocar aqui o @ do instagram</h5>
      </div>
      <div className="row1">
        <P name="estilo" text="Música classica" label="Estilo: " />
        <P name="instrumento" text="Violino" label="Instrumento: " />
      </div>
      <div className="row2">
        <TextareaPerfil
          name="resumo"
          text="Toco instrumento profissionalmente desde os 12 anos..."
          label="Resumo profissional: "
        />
        <TextareaPerfil
          name="eventos"
          text="Já trabalhei em festas, em orqueJá trabalhei em festas, em orquestras, na rua...lorem Já trabalhei em festas, em orquestras, na rua...loremua...lorem"
          label="Quais eventos você costuma se apresentar?: "
        />
      </div>
    </div>
  );
}
