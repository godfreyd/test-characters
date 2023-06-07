import useFetch from "../../../services/request/hooks/useFetch";
import { ENDPOINTS } from "../endpoints";
import { IResults } from "../interfaces/character.interfce";

const useCharacter = (characterId?: number) => {
  const { data, loading, error } = useFetch<IResults>(
    characterId
      ? {
          method: "GET",
          path: ENDPOINTS.ITEM,
          query: {
            id: characterId,
          },
        }
      : null
  );

  return {
    data: data?.data,
    loading,
    error,
  };
};

export default useCharacter;
