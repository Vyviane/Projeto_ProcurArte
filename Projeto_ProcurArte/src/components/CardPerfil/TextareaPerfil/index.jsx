import PropTypes from "prop-types";

import "./style.scss";

export default function TextareaPerfil({ name, text, label }) {
  return (
    <div className="pText">
      <label htmlFor={name}>{label}</label>
      <p name={name}>{text}</p>
    </div>
  );
}
TextareaPerfil.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
