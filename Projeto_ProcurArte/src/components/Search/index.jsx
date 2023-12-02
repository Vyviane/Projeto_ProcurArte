import PropTypes from "prop-types";
import "./style.scss";

const Search = ({ onFilterChange }) => {
  const handleInputChange = (event) => {
    const filterValue = event.target.value;
    onFilterChange(filterValue);
  };

  return (
    <div>
      <div className="search">
        <input
          className="InputSearch"
          type="text"
          size="medium"
          placeholder="Buscando por..."
          onChange={handleInputChange}
        />
        <div className="filtro">
          <img src="../../icones/icon-filtro.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Search;
