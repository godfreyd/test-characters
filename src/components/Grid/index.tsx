import { FC } from "react";
import Grid from "@mui/material/Grid";
import CharacterCard from "../Card";
import { IGridProps } from "./index.props";

const GridMU: FC<IGridProps> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid key={`id-${index}`} item xs={6} md={4}>
          <CharacterCard character={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridMU;
