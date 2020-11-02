import React from "react";
import { GlobalStyle } from "./ui/globalStyle";
import { Header } from "./components/organisms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ContentDetails,
  HomePage,
  SignPage,
  TopicContent,
  SearchPage,
  FavoritesPage,
  WatchlistPage,
} from "./components/pages";

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signup' render={() => <SignPage signUp />} />
        <Route exact path='/signin' render={() => <SignPage signIn />} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/favorites' component={FavoritesPage} />
        <Route exact path='/watchlist' component={WatchlistPage} />
        <Route exact path='/content/:type/:id' component={ContentDetails} />
        <Route
          exact
          path='/movie/:topic'
          render={(props) => (
            <TopicContent
              contentType='movie'
              topic={props.match.params.topic}
            />
          )}
        />
        <Route
          exact
          path='/tv/:topic'
          render={(props) => (
            <TopicContent contentType='tv' topic={props.match.params.topic} />
          )}
        />
      </Switch>
    </Router>
  );
}
