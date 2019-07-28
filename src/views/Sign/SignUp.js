import React from "react";
import {
  Row,
  Col,
  NavLink,
  Button,
  Form,
  FormInput,
  FormSelect,
  Container,
  FormGroup,
  InputGroup,
  FontAwesomeIcon,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

const Forms = () => (
  <Container  >
    <Col className="flex-column align-items-center justify-content-center">
      <strong className="text-muted d-block mb-2">SignUp</strong>
      <Form >
        <FormGroup>
          <InputGroup  className="mb-3">
            <InputGroupAddon type="prepend">
              <InputGroupText>
                teste
              </InputGroupText>
            </InputGroupAddon>
            <FormInput placeholder="Name" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupAddon type="prepend">
              <InputGroupText className="mi-phone">@</InputGroupText>
            </InputGroupAddon>
            <FormInput placeholder="Phone" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupAddon type="prepend">
              <InputGroupText className="mi-email">@</InputGroupText>
            </InputGroupAddon>
            <FormInput placeholder="E-mail" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <FormInput
            type="password"
            placeholder="Password"

          />
        </FormGroup>
        <Button  onClick={() => {alert("Create!")}} block> Sign Up</Button>
        <d-link href="#lorem-ipsum">My Link</d-link>
        <Button  onClick={() => {alert("Create!")}} block> Go Home </Button>
      </Form>
    </Col>
  </Container>
);

export default Forms;
