import React from "react";
import { GlobalStyle } from "./ui/globalStyle";
import { Header } from "./components/organisms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, SignPage } from "./components/pages";

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={SignPage} />
      </Switch>
    </Router>
  );
}
