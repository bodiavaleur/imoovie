import styled from "styled-components";
import { animated } from "react-spring";
import { theme } from "../../../ui/theme";

export const MobileMenuUI = styled(animated.div)`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  position: inherit;
  top: 60px;
  left: 0;
  background: ${theme.vibrancyBg};
  backdrop-filter: blur(20px) saturate(2);
`;
