import styled from "styled-components";
import { theme } from "../../../ui/theme";

export const ContentContainerUI = styled.section`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  background: ${theme.darkBg};

  ${({ image }) =>
    image &&
    `
    background: url(${image});
    background-size: cover;
  `}

  ${({ large }) =>
    large &&
    `
    min-height: 25rem;
  `}

  ${({ small }) =>
    small &&
    `
    min-height: 7.5rem;
  `}
`;
