import React, { useEffect, useState } from "react";
import { findById } from "../../../api";
import { Poster } from "../../atoms";
import { ActionButtons, Details } from "../../molecules";
import { DefaultTemplate } from "../../templates/";
import { ContentDetailsHeadUI, ContentDetailsUI } from "./ContentDetailsUI";

export function ContentDetails(props) {
  const [details, setDetails] = useState(null);
  const contentType = props.match.params.type;
  const contentId = props.match.params.id;
  const backdropBaseUrl = "http://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    findById(contentType, contentId).then((data) => setDetails(data));
  }, [contentType, contentId]);

  return (
    <DefaultTemplate>
      <ContentDetailsUI>
        {details && (
          <>
            <ContentDetailsHeadUI
              backdrop={backdropBaseUrl + details.backdrop_path}
            >
              <Poster img={details.poster_path} size='big' />
            </ContentDetailsHeadUI>
            <ActionButtons />
            <Details details={details} />
          </>
        )}
      </ContentDetailsUI>
    </DefaultTemplate>
  );
}
