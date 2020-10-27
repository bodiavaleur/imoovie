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
} from "./components/pages";
import { routes } from "./routes";

const { HOME, SIGNUP, SIGNIN, SEARCH, CONTENT, TOPIC } = routes;

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route exact path={SIGNUP} render={() => <SignPage signUp />} />
        <Route exact path={SIGNIN} render={() => <SignPage signIn />} />
        <Route exact path={SEARCH} component={SearchPage} />
        <Route exact path={CONTENT + ":id"} component={ContentDetails} />
        <Route
          exact
          path={TOPIC + ":topic"}
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
