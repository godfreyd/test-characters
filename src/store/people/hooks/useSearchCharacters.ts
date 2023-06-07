import useFetch from "../../../services/request/hooks/useFetch";
import { ENDPOINTS } from "../endpoints";
import { IResults } from "../interfaces/character.interfce";

const MIN_SEARCH_LENGTH = 3;

export const useSearchCharacters = (search: string) => {
  const { data, loading } = useFetch<IResults>(
    search.length < MIN_SEARCH_LENGTH
      ? null
      : {
          method: "GET",
          path: ENDPOINTS.SEARCH_CHARACTERS,
          params: {
            q: search,
          },
        }
  );

  return {
    list: data?.data,
    loading,
  };
};
