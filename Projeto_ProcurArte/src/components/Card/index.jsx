import "./style.scss";
import PropTypes from "prop-types";

const Card = ({name, musicStyles}) => {
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

          {musicStyles == null || musicStyles == undefined || musicStyles.length == 0 ?  (
            <p>não possui estilo</p>
            )
            : (
             musicStyles.map((style) => (
              <p key={style.id} className="estiloC">
                {style.name}
              </p>
               ))
          )}
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
  name: PropTypes.string.isRequired,
  musicStyles: PropTypes.array,
};

export default Card;
