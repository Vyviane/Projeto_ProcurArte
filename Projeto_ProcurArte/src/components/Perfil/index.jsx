import Card from "../CardPerfil";
// import { useState, useEffect } from "react";
import TextareaPerfil from "../CardPerfil/TextareaPerfil";
import "./style.scss";


// import { MusicianEndpoint } from "../../services/musicianService";
// import { toast } from "react-toastify";

// const api = new MusicianEndpoint();

const Perfil = () => {

  // const [portfolio, setportfolio] = useState([]);

  // async function handlePerfil() {
  //   try {
  //     const musiciansData = await api.getPortfolio();
  //   console.log(musiciansData)
  //     setportfolio([...musiciansData.musicians]);
    
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // }

  // useEffect(() => {
  //   handlePerfil();
  // }, []);
  return (
    <div className="exibir-portifolio">
      <div className="first-s">
        <img src="../../Imagens/imageSergio.svg" className="img-perfil" />
        <h2>Sergio mauro</h2>
        <h5>Colocar aqui o @ do instagram</h5>
      </div>
      <div className="row1">
        <Card name="estilo" text="Música classica" label="Estilo: " />
        <Card name="instrumento" text="Violino" label="Instrumento: " />
      </div>
      <div className="row2">
        <TextareaPerfil
          name="resumo"
          text="Toco instrumento profissionalmente desde os 12 anos.. linstrumento profissionalmente desde os 12 anos.instrumento profissionalmente desde os 12 anos.instrumento profissionalmente desde os 12 anos. instrumento profissionalmente desde os 12 anos.instrumento profissionalmente desde os 12 anos."
          label="Resumo profissional: "
        />
      </div>
    </div>
  );
}

export default Perfil;