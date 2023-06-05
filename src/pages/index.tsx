import Page from "../components/Page";
import usePeoples from "../store/people/hooks/usePeoples";

function Index() {
  const { list } = usePeoples();

  console.log(process.env.REACT_APP_BACKEND_HOST, list);
  return <Page></Page>;
}

export default Index;
