import { FC } from "react";
import Header from "../Header";
import { IPageProps } from "./index.props";
import { StyledPage } from "./styles";

const Page: FC<IPageProps> = ({ children, onChange, search }) => {
  return (
    <>
      <Header search={search} onChange={onChange} />
      <StyledPage>{children}</StyledPage>
    </>
  );
};

export default Page;
