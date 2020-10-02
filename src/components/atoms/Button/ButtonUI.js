import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../ui/theme";

export const ButtonUI = styled.button`
  display: block;
  min-height: 2rem;
  width: 6rem;
  margin: 0.75rem;
  padding: 5px 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: ${theme.primaryColor};
  color: ${theme.textColor};
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
