import PropTypes from "prop-types";
import "./style.scss";

const Card = ({ name, estilo }) => {
  return (
    <div className="cardC">
      <div className="fotoUser">
        <img
          src="../../Imagens/imageSergio.svg"
          alt="Sua foto de usuario escolhida"
        />
      </div>
      <div className="wrapC">
        <div className="descriptionC">
          <p className="name">{name}</p>
          <p className="estilo">{estilo}</p>
        </div>
        <img className="barraMusic" src="../../Imagens/Component1.svg" alt="" />
        <button className="btnCard">Contratar</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  //foto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  estilo: PropTypes.string.isRequired,
};

export default Card;
