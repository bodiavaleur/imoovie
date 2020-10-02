import styled, { css } from "styled-components";
import { theme } from "../../../ui/theme";

const defaultStyle = css`
  font-size: 1rem;
  color: ${theme.textColor};
`;

export const Heading = styled.h1`
  ${defaultStyle}
  font-size: 2.25rem;
  font-weight: 600;
`;

export const Title = styled.h2`
  ${defaultStyle}
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Text = styled.p`
  ${defaultStyle}
`;

export const TextSmall = styled(Text)`
  font-size: 0.8rem;
  font-weight: 300;
`;
