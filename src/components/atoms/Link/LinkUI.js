import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { theme } from "../../../ui/theme";

export const LinkUI = styled(RouterLink)`
  text-decoration: none;
  color: ${theme.primaryColor};
`;
