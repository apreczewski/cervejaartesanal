import React, { Component } from "react";
import "./style.css";
import {
  Row,
  Col,
  Card,
  CardHeader,
  NavLink,
  Button,
  Form,
  FormInput,
  ListGroup,
  ListGroupItem,
  FormCheckbox,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

import { auth } from '../../auth/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault();
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  };

  render(){
    return (
      <Row className="row-sign-up">
        <Col className="col-sign-up" md="6" sm="10" xs="11">
          <Card small>
            <CardHeader className="border-bottom">
              <h6 >Sign Up</h6>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <InputGroup  className="mb-3">
                          <InputGroupAddon type="prepend">
                            <InputGroupText>
                              <i className="material-icons">person</i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <FormInput id="txtName" placeholder="Name" onChange={() => {}} />
                        </InputGroup>
                        <InputGroup  className="mb-3">
                          <InputGroupAddon type="prepend">
                            <InputGroupText>
                              <i className="material-icons">phone</i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <FormInput id="txtPhone" type="phone" placeholder="Phone" onChange={() => {}} />
                        </InputGroup>
                        <InputGroup  className="mb-3">
                          <InputGroupAddon type="prepend">
                            <InputGroupText>
                              <i className="material-icons">email</i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
                          {/*<FormInput placeholder="Email" ref={(email) => this.email = email} />*/}
                        </InputGroup>
                        <InputGroup  className="mb-3">
                          <InputGroupAddon type="prepend">
                            <InputGroupText>
                              <i className="material-icons">vpn_key</i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
                          {/*<FormInput type="password" placeholder="Password" ref={(pw) => this.pw = pw} />*/}
                        </InputGroup>
                      </FormGroup>
                      <FormCheckbox onChange={() => {}}>
                        {/* eslint-disable-next-line */}I agree with your{" "}
                        <a href="#">Privacy Policy</a>.
                      </FormCheckbox>
                      <Button type="submit" block>Create New Account</Button>
                    </form>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center" md="6" sm="6">
                    <NavLink href="/">Home</NavLink>
                  </Col>
                  <Col className="text-center" md="6" sm="6">
                    <NavLink href="/signin">Sign In</NavLink>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    )
  }
}

//
// <div className="col-sm-6 col-sm-offset-3">
//   <h1>Register</h1>
//   <form onSubmit={this.handleSubmit}>
//     <div className="form-group">
//       <label>Email</label>
//       <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
//     </div>
//     <div className="form-group">
//       <label>Password</label>
//       <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
//     </div>
//     {
//       this.state.registerError &&
//       <div className="alert alert-danger" role="alert">
//         <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
//         <span className="sr-only">Error:</span>
//         &nbsp;{this.state.registerError}
//       </div>
//     }
//     <button type="submit" className="btn btn-primary">Register</button>
//   </form>
// </div>
