import React from "react";
import PropTypes from "prop-types";
import { MdSearch } from 'react-icons/md'
import classNames from "classnames";
import { Container, Navbar, Row, Col, Button, InputGroup, FormInput, InputGroupAddon, InputGroupText } from "shards-react";


import "./styles.css";

const NavbarHomePage = ({ stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    "rounded",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container >
        <Navbar type="light"  className="d-flex align-items-center">
          <Row>
            <Col className="text-center"  >

            </Col>
            <Col className="col-search"  >
              <InputGroup size="sm" fluid seamless>
                <InputGroupAddon type="prepend">
                  <InputGroupText >
                    <i className="material-icons">search</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput />
              </InputGroup>
            </Col>
            <Col className="d-flex justify-content-around d-flex align-items-center" >
              <Button href="/signin" size="sm" >Sign In</Button>
              <Button href="/signup" size="sm" >Sign Up</Button>
            </Col>
          </Row>
        </Navbar>
      </Container>
    </div>
  );
};

NavbarHomePage.propTypes = {
  layout: PropTypes.string,
  stickyTop: PropTypes.bool
};

NavbarHomePage.defaultProps = {
  stickyTop: true
};

export default NavbarHomePage;
