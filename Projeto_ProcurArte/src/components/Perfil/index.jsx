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
        <h2>Seu nome</h2>
        <h5>Seu  @ do instagram</h5>
      </div>
      <div className="row1">
        <Card name="estilo" text="Seu estilo musicial" label="Estilo: " />
        <Card name="instrumento" text="Seu instrumento" label="Instrumento: " />
      </div>
      <div className="row2">
        <TextareaPerfil
          name="resumo"
          text="Aqui é onde ficará todo seu resumo profissional, por tanto escreva suas experiências em eventos, lugares em que ja tocou, pode comentar também um pouco da sua história. Não economize em detalhes, pois isso aumentará suas chances de ser contratado mais rapido"
          label="Resumo profissional: "
        />
      </div>
      <button className="btn-contato">Entrar em contato</button>
    </div>
  );
}

export default Perfil;