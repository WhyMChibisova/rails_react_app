import { useRef } from "react";
import PropTypes from "prop-types"

function SearchBar({ value, onSearchChange, onImmediateChange}) {
  const searchDebounceRef = useRef(null);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;

    onImmediateChange(searchValue);

    if(searchDebounceRef.current) {
      clearTimeout(searchDebounceRef.current);
    }

    searchDebounceRef.current = setTimeout(() => {
      onSearchChange(searchValue);
    }, 500);
  };

  return (
    <div className="text-right">
      <input
        className="form-text-field"
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={handleSearchChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onImmediateChange: PropTypes.func.isRequired,
};

export default SearchBar;
