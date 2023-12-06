import "./style.scss";
import PropTypes from "prop-types";

export default function CardPerfil({ name, text, label }) {
  return (
    <div className="p">
      <label className="labelC" htmlFor={name}>{label}</label>
      <p name={name}>{text}</p>
    </div>
  );
}

CardPerfil.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
