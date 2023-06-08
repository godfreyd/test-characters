import { FC } from "react";
import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import useCharacter from "../../store/character/hooks/useCharacter";
import Loader from "../../components/Loader";
import InfoCard from "../../components/InfoCard";

interface ICharacterPage {}

const CharacterPage: FC<ICharacterPage> = () => {
  let { id } = useParams();
  const { data, loading } = useCharacter(Number(id));

  return (
    <Page>
      {loading && <Loader />}
      {data && !loading && <InfoCard data={data} />}
    </Page>
  );
};

export default CharacterPage;
