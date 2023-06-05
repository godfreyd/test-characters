import axios, {
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
  ParamsSerializerOptions,
  ResponseType,
} from "axios";
import qs from "qs";
import { compile } from "path-to-regexp";
import pick from "lodash/pick";

export interface IFetcherOptions {
  path: string;
  method: Method;
  params?: Record<string, unknown>;
  data?: unknown;
  headers?: AxiosRequestHeaders;
  query?: Record<string, string | number>;
  paramsSerializer?: ParamsSerializerOptions;
  responseType?: ResponseType;
}

export type IFetcherResponse<T> = Pick<AxiosResponse<T>, "data" | "status">;

function createFetcher() {
  const client = axios.create({
    baseURL: "/api",
    withCredentials: true,
    paramsSerializer: {
      serialize: function (params) {
        return qs.stringify(params, { arrayFormat: "brackets" });
      },
    },
  });

  return async function fetcher<T>({
    headers,
    data,
    method,
    params,
    path,
    query,
    paramsSerializer,
    responseType,
  }: IFetcherOptions): Promise<IFetcherResponse<T>> {
    const toUrl = compile(path, { validate: false });
    return pick(
      await client.request<T>({
        url: toUrl(query),
        method,
        params,
        data,
        headers,
        paramsSerializer,
        responseType,
      }),
      ["data", "status"]
    );
  };
}

export default createFetcher;
