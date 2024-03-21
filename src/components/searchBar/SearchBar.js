import { SearchInput } from "../searchInput/SearchInput";
import { Button } from "../button/Button";
import "./SearchBar.css";

export const SearchBar = ({
  searchValue,
  onChangeSearchInput,
  onClickSearchButton,
}) => {
  return (
    <div className={"search-bar-wrapper"}>
      <SearchInput value={searchValue} onChange={onChangeSearchInput} />
      <Button value={"Search"} onClick={onClickSearchButton} />
    </div>
  );
};
