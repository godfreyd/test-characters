import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  &::before {
    position: absolute;
    right: 5px;
    left: 0;

    height: 1px;
    margin: 1em 0 0;

    content: "";

    background: linear-gradient(to right, #dbdbdb 33%, transparent 0) repeat-x
      bottom;
    background-size: 3px 1px;
  }
`;
