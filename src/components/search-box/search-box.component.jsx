import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChange }) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
    />
);
export default SearchBox;