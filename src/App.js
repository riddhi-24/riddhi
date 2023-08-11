import React, { Fragment } from "react";
import './App.css'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import Page from "./page";

export default function App() {
  const leftPanelItems = [{'route': '/candidate', 'title' : 'Candidate'},{'route': '/interviews', 'title' : 'Interviews'},{'route': '/category', 'title' : 'Category'},{'route': '/plugin', 'title' : 'Wotnot Plugin'}]

  const handleRouteChangee = (route) => {
    history.push(route)
  }
  return (
  <Fragment>
  <div className="App-header">NAS</div>
  <div className="container">
  <BrowserRouter>
  <div className="Left-panel">
    {leftPanelItems.map((el, index) => {
      return <Link key={`route_${index}`} to={el.route}><div className="item" key={index}>{el.title}</div></Link>
    })}
    </div>
    <Switch>
    <Route exact path="/plugin" component={Page} ></Route>  
    </Switch>

    </BrowserRouter>
    </div>
  </Fragment>
  );
}
