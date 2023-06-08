import { FC } from "react";
import { Typography } from "@mui/material";
import { StyledContainer } from "./styles";

interface IOption {
  item: string;
  value: string;
}

const Desc: FC<IOption> = ({ item, value }) => {
  return (
    <StyledContainer>
      <Typography variant="caption">{item}:</Typography>
      <Typography variant="caption">{value}</Typography>
    </StyledContainer>
  );
};

export default Desc;
