import PropTypes from 'prop-types';

import './style.scss';

export default function InputPort({ text, type, name, placeholder }) {

    return (
        <div className="inputport">
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id="inputport" placeholder={placeholder} required />
        </div>
    )
}

InputPort.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};
