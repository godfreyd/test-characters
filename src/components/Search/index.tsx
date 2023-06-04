import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ISearchProps } from "./index.props";
import { SearchBase, SearchIconWrapper, StyledInputBase } from "./styles";

const Search: FC<ISearchProps> = () => {
  return (
    <SearchBase>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchBase>
  );
};

export default Search;
