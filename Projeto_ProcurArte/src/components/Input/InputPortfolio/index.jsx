import PropTypes from "prop-types";

import "./style.scss";

export default function InputPortfolio({ text, type, name, placeholder }) {
  return (
    <div className="inputport">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id="inputport"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

InputPortfolio.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
