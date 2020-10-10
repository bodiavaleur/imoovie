import styled from "styled-components";

export const PosterUI = styled.div`
  width: 10rem;
  height: 15rem;
  margin: 0.5rem;
  border-radius: 10px;
  background: url(${(props) => props.img});
  background-size: cover;
`;
