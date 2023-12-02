import PropTypes from "prop-types";

import "./style.scss";

export default function Textarea({ name, text }) {
  return (
    <div className="textarea">
      <label htmlFor={name}> {text} </label>
      <textarea name={name} id="textarea" required></textarea>
    </div>
  );
}
Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
