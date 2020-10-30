import React from "react";
import { Title, Text } from "../../atoms";
import { DetailsUI } from "./DetailsUI";
import { GiRoundStar } from "react-icons/gi";

export function Details({ details }) {
  // Some properties may differ in TV and movie data
  const title = details.title || details.original_name;
  let releaseDate = details.release_date || details.first_air_date;
  releaseDate = releaseDate.split("-")[0];

  return (
    <DetailsUI>
      <Title>{title}</Title>
      <Text>{releaseDate}</Text>
      <Text>
        <GiRoundStar /> {details.vote_average} ({details.vote_count})
      </Text>
      <Text>{details.overview}</Text>
    </DetailsUI>
  );
}
