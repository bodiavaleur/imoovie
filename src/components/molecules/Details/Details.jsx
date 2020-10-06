import React from "react";
import { Title, Text } from "../../atoms";
import { DetailsUI } from "./DetailsUI";

export function Details({ title, movieYear, rating, description }) {
  return (
    <DetailsUI>
      <Title>
        {title} ({movieYear})
      </Title>
      <Text>rate {rating}</Text>
      <Text>{description}</Text>
    </DetailsUI>
  );
}
