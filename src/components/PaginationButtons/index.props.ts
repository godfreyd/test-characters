import { ChangeEvent } from "react";

export interface IPaginationButtonsProps {
  count: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
}
