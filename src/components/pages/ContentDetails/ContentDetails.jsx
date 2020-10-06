import React from "react";
import { Poster } from "../../atoms";
import { Details } from "../../molecules";
import { DefaultTemplate } from "../../templates/";
import { ContentDetailsUI } from "./ContentDetailsUI";

export function ContentDetails(props) {
  return (
    <DefaultTemplate>
      <ContentDetailsUI>
        <Poster />
        <Details
          title='From dusk till dawn'
          movieYear={1990}
          rating={5.0}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos
          pariatur tempora accusamus, similique nemo debitis molestias. Quod,
          necessitatibus quia incidunt nobis excepturi, nesciunt, consectetur
          error laudantium placeat at voluptatibus.'
        />
      </ContentDetailsUI>
    </DefaultTemplate>
  );
}
