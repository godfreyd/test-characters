import { FC } from "react";
import Grid from "@mui/material/Grid";
import CharacterCard from "../Card";
import { IGridProps } from "./index.props";

const GridMU: FC<IGridProps> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map((item) => (
        <Grid item xs={6} md={4}>
          <CharacterCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridMU;
