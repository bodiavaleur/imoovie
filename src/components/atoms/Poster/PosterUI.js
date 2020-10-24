import styled from "styled-components";

export const PosterUI = styled.div`
  width: 100%;
  height: 15rem;
  border-radius: 10px;
  background: url(${(props) => props.img});
  background-size: cover;

  ${({ small }) =>
    small &&
    `
    width: 4rem;
    height: 6rem;
  `}
`;
