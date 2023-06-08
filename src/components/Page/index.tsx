import { FC } from "react";
import Header from "../Header";
import { IPageProps } from "./index.props";
import { StyledContainer, StyledPage } from "./styles";

const Page: FC<IPageProps> = ({ children }) => {
  return (
    <>
      <Header />
      <StyledPage>
        <StyledContainer>{children}</StyledContainer>
      </StyledPage>
    </>
  );
};

export default Page;
