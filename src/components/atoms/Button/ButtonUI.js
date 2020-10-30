import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../ui/theme";

export const ButtonUI = styled.button`
  display: inline-block;
  min-height: 2rem;
  min-width: 6rem;
  max-width: 10rem;
  margin: 0.75rem;
  padding: 5px 10px;
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background: ${theme.primaryColor};
  color: ${theme.textColor};

  svg {
    fill: ${theme.textColor};
  }
`;

export const ButtonIconUI = styled.button`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  border: none;
  background: none;
`;

export const ButtonLinkUI = styled(ButtonUI).attrs({ as: Link })`
  text-decoration: none;
  text-align: center;
`;
