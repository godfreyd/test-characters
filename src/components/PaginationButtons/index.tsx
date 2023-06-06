import { FC } from "react";
import Pagination from "@mui/material/Pagination";
import { IPaginationButtonsProps } from "./index.props";
import { StyledStack } from "./styles";

const PaginationButtons: FC<IPaginationButtonsProps> = ({
  count,
  page,
  onChange,
}) => {
  return (
    <StyledStack spacing={3}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        showFirstButton
        showLastButton
      />
    </StyledStack>
  );
};

export default PaginationButtons;
