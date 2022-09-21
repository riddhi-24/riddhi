import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Page from "./pages/Page";
import Error from "./pages/Error";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:botId" exact>
          <Page />
        </Route>

        <Route path="/">
          <Page />
        </Route>

        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
