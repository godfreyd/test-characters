import useFetch from "../../../../services/request/hooks/useFetch";
import { ENDPOINTS } from "../../endpoints";
import { ICharacter } from "../../interfaces/people.interfce";

interface IPeople {
  count: number;
  next: string;
  previous: string;
  results: ICharacter[];
}

const usePeoples = (pageNumber?: number) => {
  const { data, loading, error } = useFetch<IPeople>(
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

export default usePeoples;
