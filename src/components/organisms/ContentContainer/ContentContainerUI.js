import styled from "styled-components";
import { theme } from "../../../ui/theme";

export const ContentContainerUI = styled.section`
  display: flex;
  width: 100%;
  min-height: 15rem;
  justify-content: center;
  align-items: center;

  ${({ image }) =>
    image &&
    `
    background: url(${image});
    background-size: cover;
  `}
`;
