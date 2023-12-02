import PropTypes from "prop-types";
import "./style.scss";
// const Card = ({ name, estilo }) =>
const Card = ({ name }) => {
  return (
    <div className="cardC">
      <div className="contentC">
        <div className="fotoUser">
          <img
            src="https://i.pinimg.com/564x/62/a9/c2/62a9c22c499ee920b2868e4eb099c4be.jpg"
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
  //foto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  estilo: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.any,
    })
  ),
};

export default Card;
