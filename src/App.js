import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Page from "./pages/Page";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Page  />
        </Route>
      </Switch>
    </Router>
  );
}
