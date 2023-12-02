import PropTypes from "prop-types";
import "./style.scss";
// const Card = ({ name, estilo }) =>
const Card = ({ name,urlFoto}) => {
  return (
    <div className="cardC">
      <div className="contentC">
        <div className="fotoUser">
          <img
            src={urlFoto}
            alt="Sua foto de usuario"
          />
        </div>
        <div className="wrapC">
          <div className="descriptionC">
            <p className="nameC">{name}</p>
            {/* <p className="estiloC">{estilo}</p> */}
          </div>
        </div>
      </div>
      <div className="btnC">
        <button className="btnCard">
          Ver mais
          <img className="iconSeta" src="../icones/icon-seta.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  urlFoto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  //estilo: PropTypes.oneOf(musicStyle)
};

export default Card;
