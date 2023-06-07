import { FC, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ISearchProps } from "./index.props";
import { SearchBase, SearchIconWrapper, StyledInputBase } from "./styles";

const Search: FC<ISearchProps> = () => {
  const [search, setSearch] = useState("");
  return (
    <SearchBase>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={search}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchBase>
  );
};

export default Search;
