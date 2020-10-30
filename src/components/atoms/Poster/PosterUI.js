import styled from "styled-components";

const handleSize = (size) => {
  switch (size) {
    case "small":
      return `
      width: 6rem;
      height: 10rem;
    `;
    case "medium":
      return `
      width: 10rem;
      height: 15rem;
    `;
    case "big":
      return `
        width: 14rem;
        height: 20rem;
      `;
  }
};

export const PosterUI = styled.div`
  ${(props) => handleSize(props.size)}

  border-radius: 10px;
  background: url(${(props) => props.img});
  background-size: cover;
  z-index: 2;
`;
