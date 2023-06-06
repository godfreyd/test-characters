import useFetch from "../../../../services/request/hooks/useFetch";
import { ENDPOINTS } from "../../endpoints";
import { IPeople } from "../../interfaces/people.interfce";

const usePeoples = () => {
  const { data, loading, error } = useFetch<any>({
    method: "GET",
    path: ENDPOINTS.LIST,
  });

  return {
    list: data?.data || [],
    loading,
    error,
  };
};

export default usePeoples;
