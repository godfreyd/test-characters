import { FC, ReactNode, useMemo } from "react";
import { SWRConfig } from "swr";
import Context from "./context";
import createFetcher from "./helpers/createFetcher";

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useMemo(
    () => ({
      fetcher: createFetcher(),
    }),
    []
  );

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
      }}
    >
      <Context.Provider value={value}>{children}</Context.Provider>
    </SWRConfig>
  );
};

export default Provider;
