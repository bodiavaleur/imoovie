import React from "react";
import { GlobalStyle } from "./ui/globalStyle";
import { ContentContainer, Header } from "./components/organisms";
import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./components/templates/HomePage/HomePage";
import {
  ButtonLink,
  Heading,
  Title,
  TextSmall,
  Link,
  Poster,
} from "./components/atoms";
import { TopSection, MovieList, TopicTitle } from "./components/molecules/";

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <HomePage>
        <ContentContainer image='mainBackground.png' large>
          <TopSection>
            <Heading>Welcome to iMoovie</Heading>
            <Title>Explore millions of movies and TV shows.</Title>
            <ButtonLink>Sign Up</ButtonLink>
            <TextSmall>
              Already have an account? <Link>Sign In</Link>
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
      </HomePage>
    </Router>
  );
}
