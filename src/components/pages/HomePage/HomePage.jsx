import React from "react";
import {
  ButtonLink,
  Heading,
  Title,
  TextSmall,
  Link,
  Poster,
} from "../../atoms";
import { ContentContainer } from "../../organisms";
import { TopSection, MovieList, TopicTitle } from "../../molecules/";
import { DefaultTemplate } from "../../templates";

export function HomePage({ children }) {
  return (
    <DefaultTemplate>
      <ContentContainer image='mainBackground.png' large>
        <TopSection>
          <Heading>Welcome to iMoovie</Heading>
          <Title>Explore millions of movies and TV shows.</Title>
          <ButtonLink to='/signup'>Sign Up</ButtonLink>
          <TextSmall>
            Already have an account? <Link to='/signin'>Sign In</Link>
          </TextSmall>
        </TopSection>
      </ContentContainer>
      <ContentContainer>
        <TopicTitle title='Featured' linkLabel='show more' />
        <MovieList>
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </MovieList>
      </ContentContainer>
      <ContentContainer>
        <TopicTitle title='Featured' linkLabel='show more' />
        <MovieList>
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </MovieList>
      </ContentContainer>
      <ContentContainer>
        <TopicTitle title='Featured' linkLabel='show more' />
        <MovieList>
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </MovieList>
      </ContentContainer>
    </DefaultTemplate>
  );
}
