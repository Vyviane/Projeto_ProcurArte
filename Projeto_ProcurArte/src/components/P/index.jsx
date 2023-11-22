import "./style.scss"
import PropTypes from 'prop-types'; 

export default function P({name , text , label}) {
    return (
        <div className="p">
            <label htmlFor={name}>{label}</label>
            <p name={name}>{text}</p>
        </div>
    )
}

P.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};