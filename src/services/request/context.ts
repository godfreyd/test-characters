import React from "react";

import createFetcher from "./helpers/createFetcher";

type RequestContext = {
  fetcher?: ReturnType<typeof createFetcher>;
};

export default React.createContext<RequestContext>({});
