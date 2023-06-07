import useFetch from "../../../services/request/hooks/useFetch";
import { ENDPOINTS } from "../endpoints";
import { IResults } from "../interfaces/character.interfce";

const useCharacters = (pageNumber?: number) => {
  const { data, loading, error } = useFetch<IResults>(
    pageNumber
      ? {
          method: "GET",
          path: ENDPOINTS.LIST,
          params: {
            page: pageNumber,
          },
        }
      : {
          method: "GET",
          path: ENDPOINTS.LIST,
        }
  );

  return {
    list: data?.data,
    loading,
    error,
  };
};

export default useCharacters;
