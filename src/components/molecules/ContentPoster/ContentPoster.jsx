import React from "react";
import { Poster } from "../../atoms";
import { ContentPosterUI, ContentPosterTitle } from "./ContentPosterUI";

export function ContentPoster({ poster, title, link }) {
  return (
    <ContentPosterUI to={link}>
      <Poster img={poster} />
      {title && <ContentPosterTitle>{title}</ContentPosterTitle>}
    </ContentPosterUI>
  );
}
