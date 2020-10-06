import styled from "styled-components";
import { breakpoints } from "../../../ui/breakpoints";

export const DetailsUI = styled.div`
  display: flex;
  max-width: 40rem;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #333;

  @media screen and (${breakpoints.tablet}) {
    align-items: center;
  }
`;
