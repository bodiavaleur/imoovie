import styled from "styled-components";
import { theme } from "../../../ui/theme";

export const MenuItemUI = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;

  &:hover {
    background: ${theme.hoverColor};
  }
`;
