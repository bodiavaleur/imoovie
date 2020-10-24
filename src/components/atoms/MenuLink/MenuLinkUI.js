import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../../ui/theme";

export const MenuLinkUI = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  text-decoration: none;

  &:hover,
  &.active {
    background: ${theme.hoverColor};
  }
`;
