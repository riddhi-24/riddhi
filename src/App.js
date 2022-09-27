import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Page from "./pages/Page";
import Error from "./pages/Error";

export default function App() {
  return (
    <Router>
      <Switch>
     

        <Route path="/sell">
          <Page url={"buy"} />
        </Route>


        <Route path="/buy">
          <Page url={"purchase"} />
        </Route>


        <Route path="/purchase">
          <Page url={"product"} />
        </Route>


        <Route path="/product">
          <Page url={"sell"} />
        </Route>

        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
