import { AxiosError } from "axios";
import omit from "lodash/omit";
import useSWR, { SWRConfiguration } from "swr";
import { IFetcherOptions, IFetcherResponse } from "../helpers/createFetcher";

import useFetcher from "./useFetcher";

function useFetch<T>(
  options: IFetcherOptions | null,
  config?: Omit<SWRConfiguration, "fetcher">
) {
  const fetcher = useFetcher();

  const { data, error, mutate, isValidating } = useSWR<
    IFetcherResponse<T>,
    AxiosError
  >(options ? omit(options, "paramsSerializer") : options, {
    ...config,
    fetcher: options ? () => fetcher<T>(options) : undefined,
    onError: (...args) => {
      mutate(undefined, false);

      if (config?.onError) config.onError(...args);
    },
  });

  return {
    data,
    error,
    mutate,
    loading: (!data && !error && !!options) || isValidating,
  };
}

export default useFetch;
