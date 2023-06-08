import { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "../Avatar";
import Desc from "../Desc";
import { IInfoCardProps } from "./index.props";
import { StyledDesc, StyledEditButton } from "./styles";
const InfoCard: FC<IInfoCardProps> = ({ data }) => {
  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0,
    position: "relative",
  };

  return (
    <Card sx={CARD_PROPERTY}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: 2,
        }}
      >
        <Avatar />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {data.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gender: {data.gender}
        </Typography>
      </Box>
      <CardContent>
        <StyledDesc>
          <Desc item="Height" value={data.height} />
          <Desc item="Weight" value={data.mass} />
          <Desc item="Date of Birth" value={data.birth_year} />
          <Desc item="Eye color" value={data.eye_color} />
          <Desc item="Hair color" value={data.hair_color} />
          <Desc item="Color of the skin" value={data.skin_color} />
        </StyledDesc>
      </CardContent>
      <StyledEditButton>
        <IconButton aria-label="Write" size="large">
          <EditIcon />
        </IconButton>
      </StyledEditButton>
    </Card>
  );
};

export default InfoCard;
