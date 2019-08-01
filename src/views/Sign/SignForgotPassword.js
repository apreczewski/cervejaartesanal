import React from "react";
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

const FormSignForgotPassword = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <InputGroup  className="mb-3">
                <InputGroupAddon type="prepend">
                  <InputGroupText>
                    <i className="material-icons">email</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput  id="txtEmail" type="email" placeholder="Email" onChange={() => {}} />
              </InputGroup>
            </FormGroup>
            <Button  id="btnForgotpassword" type="submit" onClick={() => {alert("Loger!")}} block> Confirm </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" md="6" sm="6">
          <NavLink href="/">Home</NavLink>
        </Col>
        <Col md="6" sm="6">
          <NavLink className="text-center" href="/signin">Sign In</NavLink>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

const SignForgotPassword  = () => (
  <Row className="row-sign-forget-password">
    <Col className="col-sign-forget-password" md="6" sm="10" xs="11">
      <Card small>
        <CardHeader className="border-bottom">
          <h6 >Forgot Your Password?</h6>
        </CardHeader>
        <FormSignForgotPassword />
      </Card>
    </Col>
  </Row>
);


export default SignForgotPassword;
