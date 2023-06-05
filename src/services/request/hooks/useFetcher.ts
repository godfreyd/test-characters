import { useContext } from "react";

import RequestContext from "../context";

function useFetcher() {
  const { fetcher } = useContext(RequestContext);

  if (!fetcher) {
    throw new Error("Can not access to fetcher without initialization");
  }

  return fetcher;
}

export default useFetcher;
