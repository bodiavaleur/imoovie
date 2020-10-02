import styled from "styled-components";
import { theme } from "../../../ui/theme";

export const HeaderUI = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: ${theme.vibrancyBg};
  backdrop-filter: blur(20px) saturate(2);
`;
