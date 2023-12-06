import "./style.scss";
import React from 'react';
import Modal from 'react-modal';
import { toast } from "react-toastify";

const FilterModal = () =>{
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function Handlefiltrar() {
    toast.success("muito bom tudo filtrado")
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
        className="modal"
        style={{
          overlay: {
            backgroundColor: "rgb(0 0 0 / 75%)",
          },
        }}
      >
          <div className="headerModal">
            <h1 className="titleFilter">Adicionar filtros:</h1>
            
          </div>
            <div className="select">

            <input type="text" />
            <label htmlFor="select">Estilo</label>
              <select
              className="options"
                name="select"
                id=""
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

              
              <label htmlFor="select">Instrumento</label>
              <select
              className="options"
                name="select"
                id=""
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
            <div className="btn">
            <button
              className="filtarButton"
              onClick={() => Handlefiltrar()}
            >
             Filtrar
            </button>
            </div>
      </Modal>
    </div>
  );
}



export default FilterModal;