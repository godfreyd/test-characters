import { ReactNode } from "react";

export interface IPageProps {
  children?: ReactNode;
  onChange?: (event: any) => void;
  search: string;
}
