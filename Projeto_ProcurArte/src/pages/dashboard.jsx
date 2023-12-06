import { useState, useEffect } from "react";
import "../styles/dashboard.scss";
import Card from "../components/Card";
import Search from "../components/Search";
import { MusicianEndpoint } from "../services/musicianService";
import { toast } from "react-toastify";
import TextareaPerfil from "../components/CardPerfil/TextareaPerfil";
import FilterModal from "../components/FilterModal";

const api = new MusicianEndpoint();

const Dashboard = () => {
  const [musician, setMusician] = useState([]);

  async function fetchMusicians() {
    try {
      const musiciansData = await api.listMusician();
    console.log(musiciansData)
      setMusician([...musiciansData.musicians]);
    
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchMusicians();
  }, []);

  console.log(musician.musicStyles, musician);
  return (
    <div className="containerD">
      <div className="contentD">
        <div className="headerD"></div>
        <div className="sectionD">
          <Search />

          <div className="cardsD">

            {
              musician.map((musician) => (
                <Card
                  key={musician.id}
                  name={musician.name}
                  musicStyles={musician.musicStyles}
                />
              )
            )}
          </div>
        </div>
        <FilterModal/>
      </div>

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
                
    </div>
  );
};

export default Dashboard;
