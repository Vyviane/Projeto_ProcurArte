import { useState } from "react";
import "../styles/portifolio.scss";
import Textarea from "../components/Textarea/Textarea";

import TextareaPerfil from "../components/CardPerfil/TextareaPerfil";
import CardPerfil from "../components/CardPerfil";
import Navbar from "../components/Navbar";
import { MusicianEndpoint } from "../services/musicianService";
import { toast } from "react-toastify";

const api = new MusicianEndpoint();

const Portifolio = () => {
  const [musicianDescription, setMusicianDescription] = useState("");
  const [instagramProfile, setInstagramProfile] = useState("");
  const [profilePhoto, setprofilePhoto] = useState("");
  const [instrument, setInstrument] = useState("");
  const [musicStyle, setMusicStyle] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const responseData = await api.updateImages();
      //chamada para buscar nova url da imagem  
      //passar setprofilePhoto
      toast.success(" Foto selecionada com sucesso!" + responseData);
    } catch (error) {
      toast.error("Erro ao fazer o upload:", error.message);
    }
  };

  const handlePortfolio = async () => {
    try {
      const portfolioData = await api.updatePortfolio("", {
        musicianDescription,
        instagramProfile,
        profilePhoto,  
      });

      if (portfolioData.status === 200) {
        toast.success("Perfil salvo com sucesso!");
      } else {
        toast.success("Erro ao salvar perfil. Por favor, tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao salvar perfil:", error);
      toast.error("Erro ao salvar perfil. Por favor, tente novamente.");
    }
  };

  const handleInstrument = async () => {
    try {
      const instrument = await api.updateInstruments("", {
        instrument,
      });
    } catch (error) {
      return;
    }
  };

  const handleMusicStyle = async () => {
    try {
      const musicStyle = await api.updateMusicStyles("", {
        musicStyle,
      });
    } catch (error) {
      return; 
    }
  };

  function handleSalvarPortfolio() {
    handlePortfolio(), handleInstrument(), handleMusicStyle();
  }

  return (
    <div className="containerP">
      <Navbar />
      <div className="portifolio">
        <div className="inputs-portifolio">
          <div className="inputs-2">
            <div className="select">
              <label className="labelP" htmlFor="select">Estilo</label>
              <select
                name="select"
                id=""
                value={musicStyle}
                onChange={(e) => setMusicStyle(e.target.value)}
              >
                <option value="Ocidental">Clássica Ocidental</option>
                <option value="Orquestral">Música Orquestral</option>
                <option value="Opera">Ópera</option>
                <option value="Coral">Música Coral</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="HipHop">Hip Hop</option>
                <option value="Rap">Rap</option>
                <option value="R&B">R&B (Rhythm and Blues)</option>
                <option value="Jazz">Jazz</option>
                <option value="Blues">Blues</option>
                <option value="Funk">Funk</option>
                <option value="Soul">Soul</option>
                <option value="Reggae">Reggae</option>
                <option value="Eletronica">Eletrônica</option>
                <option value="Dance">Dance</option>
                <option value="Country">Country</option>
                <option value="Folk">Folk</option>
                <option value="Indie">Indie</option>
                <option value="Folclorica">Música Folclórica</option>
                <option value="Tradicional">Música Tradicional</option>
                <option value="Salsa">Salsa</option>
                <option value="Merengue">Merengue</option>
                <option value="Cumbia">Cumbia</option>
                <option value="Reggaeton">Reggaeton</option>
                <option value="Bachata">Bachata</option>
                <option value="Trap">Trap</option>
                <option value="Grime">Grime</option>

                <option value="HeavyMetal">Heavy Metal</option>
                <option value="ThrashMetal">Thrash Metal</option>
                <option value="DeathMetal">Death Metal</option>
                <option value="BlackMetal">Black Metal</option>
                <option value="PunkRock">Punk Rock</option>
                <option value="IndieRock">Indie Rock</option>

                <option value="Gospel">Gospel</option>
                <option value="Blues2">Blues</option>
                <option value="NewAge">New Age</option>
                <option value="Acapella">A Capella</option>
                <option value="Ambient">Ambient</option>
                <option value="JPop">J-Pop (Pop Japonês)</option>
                <option value="KPop">K-Pop (Pop Coreano)</option>
              </select>
            </div>
            <div className="select">
              <label className="labelP" htmlFor="select">Instrumento</label>
              <select
                name="select"
                id=""
                value={instrument}
                onChange={(e) => setInstrument(e.target.value)}
              >
                <option value="Violao">Violão</option>
                <option value="Guitarra">Guitarra</option>
                <option value="Baixo">Baixo</option>
                <option value="Bateria">Bateria</option>
                <option value="Teclado">Teclado</option>
                <option value="Piano">Piano</option>
                <option value="Saxofone">Saxofone</option>
                <option value="Trompete">Trompete</option>
                <option value="Violino">Violino</option>
                <option value="Flauta">Flauta</option>
                <option value="Cello">Cello</option>
                <option value="Trombone">Trombone</option>
                <option value="Harp">Harp</option>
                <option value="Banjo">Banjo</option>
                <option value="Acordeao">Acordeão</option>
                <option value="Clarinet">Clarinet</option>
                <option value="Oboe">Oboé</option>
                <option value="Fagote">Fagote</option>
                <option value="Harpa">Harpa</option>
                <option value="GaitaDeFoles">Gaita de Foles</option>
                <option value="Viola">Viola</option>
                <option value="Sitar">Sitar</option>
                <option value="Tabla">Tabla</option>
                <option value="Tuba">Tuba</option>
                <option value="Trompa">Trompa</option>
                <option value="Marimba">Marimba</option>
                <option value="Cajon">Cajón</option>
                <option value="Tamborim">Tamborim</option>
                <option value="Congas">Congas</option>
                <option value="Berimbau">Berimbau</option>
                <option value="Didgeridoo">Didgeridoo</option>
                <option value="Theremin">Theremin</option>
                <option value="Bandolim">Bandolim</option>
                <option value="Xilofone">Xilofone</option>
                <option value="Pandeiro">Pandeiro</option>
                <option value="GaitaDeBoca">Gaita de Boca</option>
                <option value="Djembe">Djembe</option>
                <option value="TrompaAlpina">Trompa Alpina</option>
                <option value="Contrabaixo">Contrabaixo</option>
                <option value="Ocarina">Ocarina</option>
                <option value="Glockenspiel">Glockenspiel</option>
                <option value="TrompetePiccolo">Trompete Piccolo</option>
                <option value="Flugelhorn">Flugelhorn</option>
                <option value="Surdo">Surdo</option>
                <option value="Citara">Cítara</option>
                <option value="Pifano">Pífano</option>
                <option value="Shakuhachi">Shakuhachi</option>
                <option value="Guzheng">Guzheng</option>
                <option value="Zither">Zither</option>
              </select>
            </div>
          </div>
          <div className="inputs-1">
            <label htmlFor="select">Instagram</label>
            <input
              className="Instagram"
              name="instagram"
              value={instagramProfile}
              onChange={(e) => setInstagramProfile(e.target.value)}
            />
            <Textarea
              name="resumo"
              text="Resumo profissional"
              value={musicianDescription}
              onChange={(e) => setMusicianDescription(e.target.value)}
            />
          </div>
          <div className="uploadPhotos">
            <input type="file" onChange={handleFileChange} />
            <button className="buttonUploado" onClick={handleUpload}>
              Upload
            </button>
          </div>

          <div className="buttonSalvar">
            <button className="salvar" onClick={handleSalvarPortfolio}>
              Salvar
            </button>
          </div>
        </div>
        <div className="exibir-portifolio">
      <div className="first-s">
        <img src="../../Imagens/imageSergio.svg" className="img-perfil" />
        <h2>Seu nome</h2>
        <h5>Seu  @ do instagram</h5>
      </div>
      <div className="row1">
        <CardPerfil name="estilo" text="Seu estilo musicial" label="Estilo: " />
        <CardPerfil name="instrumento" text="Seu instrumento" label="Instrumento: "/>
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
    </div>
  );
};

export default Portifolio;
