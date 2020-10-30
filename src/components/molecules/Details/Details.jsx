import React from "react";
import { Title, Text, Tag } from "../../atoms";
import { DetailsUI } from "./DetailsUI";
import { GiRoundStar } from "react-icons/gi";
import { TagsLine } from "../TagsLine/TagsLine";

export function Details({ details }) {
  // Some properties may differ in TV and movie data
  const title = details.title || details.original_name;
  let releaseDate = details.release_date || details.first_air_date;
  releaseDate = releaseDate.split("-")[0];

  return (
    <DetailsUI>
      <Title>
        {title} ({releaseDate})
      </Title>
      <Text>
        <GiRoundStar /> {details.vote_average} ({details.vote_count})
      </Text>
      {details.tagline && <Text transparent>{details.tagline}</Text>}

      <Text>{details.overview}</Text>

      <TagsLine>
        {details.genres.map((genre) => (
          <Tag key={genre.id}>{genre.name}</Tag>
        ))}
      </TagsLine>
    </DetailsUI>
  );
}
