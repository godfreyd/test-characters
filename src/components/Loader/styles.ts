import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Pulse = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  display: block;

  div {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: rgba(57, 57, 57);
    opacity: 0;

    animation: pulse 2.5s linear infinite;

    @keyframes pulse {
      10% {
        width: 24px;
        height: 24px;
      }
      10% {
        width: 24px;
        height: 24px;
        opacity: 0.05;
      }
      90% {
        width: 74px;
        height: 74px;
        opacity: 0.05;
      }
      100% {
        width: 74px;
        height: 74px;
        opacity: 0;
      }
    }

    &:nth-of-type(2) {
      animation-delay: -3s;
    }

    &:nth-of-type(3) {
      animation-delay: -6s;
    }

    &:nth-of-type(4) {
      animation-delay: -9s;
    }
  }
`;
