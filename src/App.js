import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/shards-dashboards.1.1.0.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import api from '../src/services/api'
import routes from "./routes";
import withTracker from "./withTracker";

const App = () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
export default App;
