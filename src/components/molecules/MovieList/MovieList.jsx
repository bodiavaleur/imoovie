import React from "react";
import { MovieListUI } from "./MovieListUI";

export function MovieList({ children }) {
  return <MovieListUI>{children}</MovieListUI>;
}
