import styled from "styled-components";
import { theme } from "../../../ui/theme";

export const ContentPosterUI = styled.div`
  display: flex;
  width: 10rem;
  height: 17rem;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
`;

export const ContentPosterTitle = styled.p`
  width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  color: ${theme.textColor};
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px;
`;
