import styled from "styled-components";
import { theme } from "../../../ui/theme";

export const InputUI = styled.input`
  width: 10rem;
  height: 1.5rem;
  padding: 0.3rem;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #333;

  ${({ error }) =>
    error &&
    `
    border: 1px solid ${theme.errorColor};
  `}
`;

export const InputSearchUI = styled.input`
  width: 10rem;
  height: 1.5rem;
  border: none;
  border-bottom: 1px solid rgba(90, 90, 90, 0.75);
  outline: none;
  text-align: center;
  background: none;
  color: ${theme.textColor};
`;
