import Page from "../components/Page";
import usePeoples from "../store/people/hooks/usePeoples";
import Grid from "../components/Grid";
import PaginationButtons from "../components/PaginationButtons";
import { StyledContainer } from "./styles";
function Index() {
  const { list } = usePeoples();

  console.log(process.env.REACT_APP_BACKEND_HOST, list);
  return (
    <Page>
      <StyledContainer>
        <Grid />
        <PaginationButtons />
      </StyledContainer>
    </Page>
  );
}

export default Index;
