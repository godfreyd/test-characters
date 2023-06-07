import { FC } from "react";
import { useParams } from 'react-router-dom';
import Page from "../../components/Page";
import useCharacter from "../../store/character/hooks/useCharacter";

interface ICharacterPage {}

const CharacterPage: FC<ICharacterPage> = () => {
  let { id } = useParams();
  const { data, loading} = useCharacter(Number(id));

  console.log(data, loading);
  
  return <Page>

  </Page>;
}

export default CharacterPage;
