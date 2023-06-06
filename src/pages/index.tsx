import { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import usePeoples from "../store/people/hooks/usePeoples";
import Grid from "../components/Grid";
import PaginationButtons from "../components/PaginationButtons";
import Loader from "../components/Loader";
import { StyledContainer } from "./styles";
function Index() {
  const { list, loading } = usePeoples();
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  const onHandleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    []
  );

  useEffect(() => {
    if (loading || !list.results.length) return;

    setPeople(list.results);
  }, [list.results]);

  return (
    <Page>
      <StyledContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Grid data={people} />
            <PaginationButtons
              count={10}
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
