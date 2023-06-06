import { FC } from "react";
import Pagination from "@mui/material/Pagination";
import { IPaginationButtonsProps } from "./index.props";
import { StyledStack } from "./styles";

const PaginationButtons: FC<IPaginationButtonsProps> = () => {
  return (
    <StyledStack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton />
    </StyledStack>
  );
};

export default PaginationButtons;
