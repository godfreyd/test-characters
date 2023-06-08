import { useCallback, useEffect, useMemo, useState } from "react";
import { AlertTitle } from "@mui/material";
import Page from "../components/Page";
import useCharacters from "../store/character/hooks/useCharacters";
import Grid from "../components/Grid";
import PaginationButtons from "../components/PaginationButtons";
import Loader from "../components/Loader";
import { useSearchCharacters } from "../store/character/hooks/useSearchCharacters";
import Search from "../components/Search";
import { StyledAlert, StyledContainer } from "./styles";

function IndexPage() {
  let count = 1;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { list, loading: characterLoading } = useCharacters(page);
  const [people, setPeople] = useState<any>([]);
  const isSearchUser = search.length >= 3;
  const { list: listSearch, loading: searchLoading } =
    useSearchCharacters(search);

  const loading = characterLoading || searchLoading;

  const onHandleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    []
  );

  const onChangeSearchInputHandler = useCallback((event: any) => {
    setSearch(event.target.value);
  }, []);

  useEffect(() => {
    if (loading || !list) return;

    setPeople(list?.results);
  }, [list?.results, list, loading]);

  const results = useMemo(() => {
    if (loading) return <Loader />;

    if (!!people?.length && !isSearchUser) {
      return (
        <>
          <Grid data={people} />
          <PaginationButtons
            count={Math.ceil(Number(list?.count) / 10)}
            page={page}
            onChange={onHandleChange}
          />
        </>
      );
    }

    if (listSearch?.count && isSearchUser) {
      return (
        <>
          <Grid data={listSearch?.results} />
          <PaginationButtons
            count={Math.ceil(Number(listSearch?.count) / 10)}
            page={page}
            onChange={onHandleChange}
          />
        </>
      );
    }

    if (isSearchUser) {
      return (
        <StyledContainer>
          <StyledAlert severity="info">
            <AlertTitle>Info</AlertTitle>
            User not found
          </StyledAlert>
        </StyledContainer>
      );
    }

    return null;
  }, [
    loading,
    people,
    isSearchUser,
    onHandleChange,
    page,
    list?.count,
    listSearch?.count,
    listSearch?.results,
  ]);

  return (
    <Page>
      <Search search={search} onChange={onChangeSearchInputHandler} />
      {results}
    </Page>
  );
}

export default IndexPage;
