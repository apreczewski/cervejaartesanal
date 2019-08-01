import React from "react";
import { Container, Row, Col } from "shards-react";

import Navbar from "../../components/home-page/Navbar";
import Footer from "../../components/Footer";

const LayoutDefault = ({ children }) => (
  <Container fluid>
    <Row >
      <Col
        className="main-content p-0"
        lg={{ onSet: 1, size: 10, offset: 1 }}
        md={{ onSet: 1, size: 10, offset: 1 }}
        sm="12"
        tag="main"
      >
        { <Navbar /> }
        { children }
        { <Footer /> }
      </Col>
    </Row>
  </Container>
);

export default LayoutDefault;
