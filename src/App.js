import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/shards-dashboards.1.1.0.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import api from './/services/api'
import Routes from "./Routes/index";
import withTracker from "./withTracker";

const App = () => (
  <Routes/>
);

export default App;