import styled from "styled-components";
import { theme } from "../../../ui/theme";

export const TagUI = styled.span`
  height: 2rem;
  min-width: 3rem;
  margin: 0.3rem;
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  background: ${theme.darkBg};
  color: ${theme.primaryColor};
`;
