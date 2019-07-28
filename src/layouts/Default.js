import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import NavbarHomePage from "../components/dashboard/Navbar";
import Footer from "../components/Footer";

const DefaultLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row >
      <Col
        className="main-content p-0"
        lg={{ onSet: 1, size: 10, offset: 1 }}
        md={{ onSet: 1, size: 10, offset: 1 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <NavbarHomePage />}
        {children}
        {!noFooter && <Footer />}
      </Col>
    </Row>
  </Container>
);

DefaultLayout.propTypes = {
  // Whether to display the navbar, or not.
  noNavbar: PropTypes.bool,

  // Whether to display the footer, or not.
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
