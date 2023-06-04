import { FC } from "react";
import { IPageProps } from "./index.props";
import { StyledPage } from "./styles";
import Header from "../Header";

const Page: FC<IPageProps> = ({ children, ...props }) => {
  return (
    <StyledPage {...props}>
      <Header />
      {children}
    </StyledPage>
  );
};

export default Page;
