import styled from "styled-components";

export const LogoUI = styled.img`
  height: 40px;
  width: 150px;

  ${({ large }) =>
    large &&
    `
    height: 80px;
    width: 300px;
  `}
`;
