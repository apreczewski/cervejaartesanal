import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Route Views
import HomePage from "../views/HomePage/HomePage";
import SignIn from "../views/Sign/SignIn";
import SignUp from "../views/Sign/SignUp";
import SignForgotPassword from "../views/Sign/SignForgotPassword";
import Dashboard from "../components/Dashboard";
import { firebaseAuth } from '../credentials/firebase'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class Routes extends Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/home-page"/>}/>
          <Route path="/home-page" component={() => <HomePage/>}/>
          <PublicRoute authed={this.state.authed} path="/signin" component={() => <SignIn/>}/>
          <PublicRoute authed={this.state.authed} path="/signup" component={() => <SignUp/>}/>
          <PublicRoute authed={this.state.authed} path="/signforgotpassword" component={() => <SignForgotPassword/>}/>
          <PrivateRoute authed={this.state.authed} path="/dashboard" component={() => <Dashboard />}/>
        </Switch>
      </BrowserRouter>
    );
  }
};
