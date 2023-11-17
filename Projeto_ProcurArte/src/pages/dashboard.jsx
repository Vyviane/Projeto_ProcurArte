import "../styles/dashboard.scss";
import Card from "../components/Card";

export default function dashboard() {
  return (
    <div className="containerD">
      <div className="contentD">
      <div className="headerD">
        <img
          src="../../Imagens/imageDashboard.svg"
          alt="Imagem que representa músicos com seus inrtumentos na mão, com a frase: vamos achar um músico pra seu evento?"
        />
      </div>
      <div className="sectionD">
          <div className="search">
          <input className="InputSearch" type="text" size="medium" placeholder="Buscando por..."/>
          <div className="filtro">
            <img src="../../icones/icon-filtro.svg" alt="" />
          </div>
          </div>

          

          <div className="cardsD">
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>
            <Card name="Jose Roberto" estilo="pop e rock"/>

          </div>
      </div>
      </div>
    </div>
  );
}
