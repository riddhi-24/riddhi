import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import CustomPopup from "./CustomPopupWithClosepreference";
import DynamicScript from "./DynamicScript";
import EmbedBot from "./EmbedChatBot";
import GaTracking from "./GaTracking";
import './App.css';
import Record from "./Record";

export default function App() {
  return (
    <div>
      
      <Router>
      <nav>
        <ul className="header">
         
          <li><Link to="/popup">Custom Popup</Link></li>
          <span>|</span>

          <li><Link to="/dynamic-script">Dynamic Script</Link></li>
          <span>|</span>

          <li><Link to="/embed-bot">Embed Bot</Link></li>
          <span>|</span>

          <li><Link to="/ga-tracking">GA Tracking</Link></li>
          <span>|</span>

          <li><Link to="/record">Record</Link></li>
        </ul>
      </nav>
      <h1>Riddhi's website</h1>
        <Switch>
          <Route path="/popup" render={() => <CustomPopup />} />
          <Route path="/dynamic-script" render={() => <DynamicScript />} />
          <Route path="/embed-bot" render={() => <EmbedBot />} />
          <Route path="/ga-tracking" render={() => <GaTracking />} />
           <Route path="/record" render={() => <Record />} />
        </Switch>
      </Router>
      
      </div>
  );
}
