import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormInput,
  FormSelect,
  Container,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

const Forms = () => (
  <Container  >
    <Col className="flex-column align-items-center justify-content-center">
      <strong className="text-muted d-block mb-2">SignIn</strong>
      <Form >
        <FormGroup>
          <InputGroup className="mb-3">
            <InputGroupAddon type="prepend">
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <FormInput placeholder="Username" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <FormInput
            type="password"
            placeholder="Password"
            onChange={() => {}}
          />
        </FormGroup>


        <Button  block> Sign In</Button>
      </Form>
    </Col>
  </Container>
);

export default Forms;
