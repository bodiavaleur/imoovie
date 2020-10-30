import React from "react";
import { PosterUI } from "./PosterUI";

const posterSizes = {
  small: 185,
  medium: 300,
  big: 500,
};

export function Poster({ img, size = "medium" }) {
  const posterBaseUrl = `http://image.tmdb.org/t/p/w${posterSizes[size]}/`;

  return <PosterUI img={posterBaseUrl + img} size={size} />;
}
