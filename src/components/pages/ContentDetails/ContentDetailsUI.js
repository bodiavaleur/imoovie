import styled from "styled-components";

export const ContentDetailsUI = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentDetailsHeadUI = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  position: relative;
  background: url(${(props) => props.backdrop});
  background-size: cover;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(
      90deg,
      rgba(255, 45, 85, 0.7) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;
