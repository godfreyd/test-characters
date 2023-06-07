import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ISearchProps } from "./index.props";
import { SearchBase, SearchIconWrapper, StyledInputBase } from "./styles";

const Search: FC<ISearchProps> = ({ onChange, search }) => {
  return (
    <SearchBase>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={search}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={onChange}
      />
    </SearchBase>
  );
};

export default Search;
