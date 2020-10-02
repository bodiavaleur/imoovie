import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const IconLinkUI = styled(NavLink)`
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }
`;
