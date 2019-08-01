import React, { Component } from "react";
import { login } from "../../auth/auth"
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
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class FormSignIn extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault();
    login(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  };

  render(){
    return(
      <Row className="row-sign-in">
        <Col className="col-sign-in" md="6" sm="10" xs="11">
          <Card small>
            <CardHeader className="border-bottom">
              <h6 >Sign In</h6>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form onSubmit={this.handleSubmit} >
                      <FormGroup>
                        <InputGroup  className="mb-3">
                          <InputGroupAddon type="prepend">
                            <InputGroupText>
                              <i className="material-icons">email</i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <input type="email" className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
                        </InputGroup>
                        <InputGroup  className="mb-3">
                          <InputGroupAddon type="prepend">
                            <InputGroupText>
                              <i className="material-icons">vpn_key</i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
                        </InputGroup>
                      </FormGroup>
                      <Button type="submit" block>Access Account</Button>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center" md="4" sm="4">
                    <NavLink href="/">Home</NavLink>
                  </Col>
                  <Col className="text-center" md="4" sm="4">
                    <NavLink href="/signup">Sign Up</NavLink>
                  </Col>
                  <Col className="text-center" md="4" sm="4">
                    <NavLink href="/signforgotpassword">Forgot Your Password?</NavLink>
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
