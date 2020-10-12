import React from "react";
import { Poster } from "../../atoms";
import { ContentPosterUI, ContentPosterTitle } from "./ContentPosterUI";

export function ContentPoster({ poster, title }) {
  return (
    <ContentPosterUI>
      <Poster img={poster} />
      <ContentPosterTitle>{title}</ContentPosterTitle>
    </ContentPosterUI>
  );
}
