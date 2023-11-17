
import PropTypes from 'prop-types'; // Importe o módulo PropTypes

import './style.scss';

const Input = ({ type, text, size }) => {
  const inputClassName = `input ${size}`;

  return (
    <div className="inputs">
      <label htmlFor="input">{text}</label>
      <input className={inputClassName} type={type} name='Input' id="input" required />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
};

export default Input;