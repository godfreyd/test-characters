import { FC } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Avatar from "../Avatar";
import { ICharacterCardProps } from "./index.props";

const CharacterCard: FC<ICharacterCardProps> = ({ character }) => {
  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0,
  };
  console.log("===", character);
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
        <Typography variant="body1" color="black" sx={{ mb: 3 }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen..
        </Typography>
        <Button href={`/character/${Number(id)}`}>Read more</Button>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
