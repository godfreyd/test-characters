import { FC } from "react";
import Header from "../Header";
import { IPageProps } from "./index.props";
import { StyledPage } from "./styles";

const Page: FC<IPageProps> = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  );
};

export default Page;
