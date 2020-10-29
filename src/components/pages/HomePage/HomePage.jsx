import React, { useState, useEffect } from "react";
import { ButtonLink, Heading, Title, TextSmall, Link } from "../../atoms";
import { ContentContainer } from "../../organisms";
import {
  TopSection,
  MovieList,
  TopicTitle,
  ContentPoster,
} from "../../molecules/";
import { DefaultTemplate } from "../../templates";
import { getContentByTopic } from "../../../api";

export function HomePage() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [popularTv, setPopularTv] = useState(null);
  const [topMovies, setTopMovies] = useState(null);
  const [topTv, setTopTv] = useState(null);

  const showContent = (data) => {
    return data
      ? data.map((item) => (
          <ContentPoster
            key={item.id}
            poster={item.poster_path}
            title={item.title || item.original_name}
            link={`/content/${item.media_type}/${item.id}`}
          />
        ))
      : null;
  };

  useEffect(() => {
    getContentByTopic("movie", "now_playing").then(({ results }) =>
      setNowPlaying(results.slice(0, 4))
    );
    getContentByTopic("movie", "popular").then(({ results }) =>
      setPopularMovies(results.slice(0, 4))
    );
    getContentByTopic("tv", "popular").then(({ results }) =>
      setPopularTv(results.slice(0, 4))
    );
    getContentByTopic("movie", "top_rated").then(({ results }) =>
      setTopMovies(results.slice(0, 4))
    );
    getContentByTopic("tv", "top_rated").then(({ results }) =>
      setTopTv(results.slice(0, 4))
    );
  }, []);

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
        <TopicTitle
          title='Now Playing Movies'
          linkLabel='See All'
          linkTo='/movie/now_playing'
        />
        <MovieList>{showContent(nowPlaying)}</MovieList>
      </ContentContainer>
      <ContentContainer>
        <TopicTitle
          title='Popular Movies'
          linkLabel='See All'
          linkTo='/movie/popular'
        />
        <MovieList>{showContent(popularMovies)}</MovieList>
      </ContentContainer>
      <ContentContainer>
        <TopicTitle
          title='Popular TV Shows'
          linkLabel='See All'
          linkTo='/tv/popular'
        />
        <MovieList>{showContent(popularTv)}</MovieList>
      </ContentContainer>
      <ContentContainer>
        <TopicTitle
          title='Top Rated Movies'
          linkLabel='See All'
          linkTo='/movie/top_rated'
        />
        <MovieList>{showContent(topMovies)}</MovieList>
      </ContentContainer>
      <ContentContainer>
        <TopicTitle
          title='Top Rated TV Shows'
          linkLabel='See All'
          linkTo='/tv/top_rated'
        />
        <MovieList>{showContent(topTv)}</MovieList>
      </ContentContainer>
    </DefaultTemplate>
  );
}
