import React, { useEffect, useState } from "react";
import { findById } from "../../../api";
import { ContentPoster, Details } from "../../molecules";
import { DefaultTemplate } from "../../templates/";
import { ContentDetailsUI } from "./ContentDetailsUI";

export function ContentDetails(props) {
  const [details, setDetails] = useState(null);
  const contentType = props.match.params.type;
  const contentId = props.match.params.id;

  useEffect(() => {
    findById(contentType, contentId).then((data) => setDetails(data));
  }, [contentType, contentId]);

  console.log("details :>> ", details);

  return (
    <DefaultTemplate>
      <ContentDetailsUI>
        {details && (
          <>
            <ContentPoster poster={details.poster_path} title='' />
            <Details
              title={details.title}
              movieYear={details.release_date.split("-")[0]}
              rating={details.vote_average}
              description={details.overview}
            />
          </>
        )}
      </ContentDetailsUI>
    </DefaultTemplate>
  );
}
