import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Private Default
import PrivateRoutes from "./PrivateRoutes";

// Route Views
import HomePage from "../views/Home/HomePage";
import SignIn from "../views/Sign/SignIn";
import SignUp from "../views/Sign/SignUp";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/home-page" />}/>
      <Route path="/home-page" component={() => <HomePage />}/>
      <Route path="/signin" component={() => <SignIn />}/>
      <Route path="/signup" component={() => <SignUp />}/>
      <PrivateRoutes path="/dashboard" component={() => <h1> dashboard </h1>} />
    </Switch>
  </BrowserRouter>
);


export default Routes;