import React from "react";
import { GlobalStyle } from "./ui/globalStyle";
import { Header } from "./components/organisms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ContentDetails,
  HomePage,
  SignPage,
  TopicContent,
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
        <Route exact path='/content/:id' component={ContentDetails} />
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
      </Switch>
    </Router>
  );
}
