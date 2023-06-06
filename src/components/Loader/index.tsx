import { FC } from "react";
import { Container, Pulse } from "./styles";

const Loader: FC<{ className?: string }> = ({ className }) => {
  return (
    <Container className={className}>
      <Pulse>
        <div />
        <div />
        <div />
        <div />
      </Pulse>
    </Container>
  );
};

export default Loader;
