import React from "react";
import { Poster } from "../../atoms";
import { ContentPosterUI, ContentPosterTitle } from "./ContentPosterUI";

export function ContentPoster({ poster, title, link }) {
  const posterBaseUrl = "http://image.tmdb.org/t/p/w185/";
  return (
    <ContentPosterUI to={link}>
      <Poster img={posterBaseUrl + poster} />
      <ContentPosterTitle>{title}</ContentPosterTitle>
    </ContentPosterUI>
  );
}
