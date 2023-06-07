import { FC } from "react";
import Header from "../Header";
import { IPageProps } from "./index.props";
import { StyledContainer, StyledPage } from "./styles";

const Page: FC<IPageProps> = ({ children, onChange, search }) => {
  return (
    <>
      <Header search={search} onChange={onChange} />
      <StyledPage>
        <StyledContainer>{children}</StyledContainer>
      </StyledPage>
    </>
  );
};

export default Page;
