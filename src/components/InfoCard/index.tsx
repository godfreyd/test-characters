import { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "../Avatar";
import { IInfoCardProps } from "./index.props";

const InfoCard: FC<IInfoCardProps> = ({ data }) => {
  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0,
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
          Selena Mcconoor
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Teacher
        </Typography>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <IconButton aria-label="Write" size="large">
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
