import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Assitant from "./Assitant";
import Doctor from "./Doctor";
import "./styles.css";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/assitant" component={Assitant} />
        <Route exact path="/doctor" component={Doctor} />
      </Switch>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
