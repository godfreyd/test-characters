import { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import usePeoples from "../store/people/hooks/usePeoples";
import Grid from "../components/Grid";
import PaginationButtons from "../components/PaginationButtons";
import Loader from "../components/Loader";
import { StyledContainer } from "./styles";
function Index() {
  const [page, setPage] = useState(1);
  const { list, loading } = usePeoples(page);
  const [people, setPeople] = useState<any>([]);

  const onHandleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    []
  );

  useEffect(() => {
    if (loading || !list) return;

    setPeople(list.results);
  }, [list]);

  console.log(list);
  return (
    <Page>
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
