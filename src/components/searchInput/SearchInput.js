import "./SearchInput.css";

export const SearchInput = ({ value, onChange }) => {
  return (
    <input
      className={"search-input"}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={"Enter the name of interested city"}
    />
  );
};
