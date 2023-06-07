import { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import useCharacters from "../store/character/hooks/useCharacters";
import Grid from "../components/Grid";
import PaginationButtons from "../components/PaginationButtons";
import Loader from "../components/Loader";
import { useSearchCharacters } from "../store/character/hooks/useSearchCharacters";
import { StyledContainer } from "./styles";
function Index() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { list, loading: characterLoading } = useCharacters(page);
  const [people, setPeople] = useState<any>([]);

  const { list: data, loading: searchLoading } = useSearchCharacters(search);

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

    setPeople(list.results);
  }, [list]);

  console.log(search, data);

  return (
    <Page search={search} onChange={onChangeSearchInputHandler}>
      <StyledContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Grid data={people} />
            <PaginationButtons
              count={Math.ceil(Number(list?.count) / 10)}
              page={page}
              onChange={onHandleChange}
            />
          </>
        )}
      </StyledContainer>
    </Page>
  );
}

export default Index;
