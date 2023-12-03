import PropTypes from "prop-types";

import "./style.scss";

const Input = ({ type, text, size, placeholder }) => {
  const inputClassName = `input ${size}`;

  return (
    <div className="inputs">
      <label htmlFor="input">{text}</label>
      <input
        className={inputClassName}
        type={type}
        name="Input"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["medium", "large","small"]).isRequired,
  placeholder: PropTypes.string,
};

export default Input;
