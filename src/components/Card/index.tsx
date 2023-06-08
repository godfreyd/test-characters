import { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Avatar from "../Avatar";
import Desc from "../Desc";
import { StyledDesc } from "./styles";
import { ICharacterCardProps } from "./index.props";

const CharacterCard: FC<ICharacterCardProps> = ({ character }) => {
  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0,
  };
  const urlObj = new URL(character.url);
  const id = urlObj.pathname.split("/")[3];

  return (
    <Card sx={CARD_PROPERTY}>
      <CardHeader
        sx={{ p: 3 }}
        avatar={<Avatar />}
        title={
          <Link
            href="#"
            variant="body1"
            color="black"
            underline="none"
            sx={{ fontWeight: "medium" }}
          >
            {character.name}
          </Link>
        }
        subheader={`Gender: ${character.gender}`}
      />
      <CardContent sx={{ p: 3 }}>
        <StyledDesc>
          <Desc item="Height" value={character.height} />
          <Desc item="Weight" value={character.mass} />
          <Desc item="Date of Birth" value={character.birth_year} />
          <Desc item="Eye color" value={character.eye_color} />
          <Desc item="Hair color" value={character.hair_color} />
          <Desc item="Color of the skin" value={character.skin_color} />
        </StyledDesc>
        <Button href={`/character/${Number(id)}`}>Read more</Button>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
