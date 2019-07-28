import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Nav, NavItem, NavLink } from "shards-react";
import { Link } from "react-router-dom";
import classNames from "classnames";


const MainFooter = ({ contained, menuItems, copyright }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    "rounded",
    "margin",
    "d-flex",
    "p-2",
    "px-3",
    "bg-white",
    "sticky-top"
  );

  return(
    <footer className={classes}>
      <Container fluid={contained}>
        <Row >
          <span className="copyright ml-auto my-3 mr-2 ">{copyright}</span>
        </Row>
      </Container>
    </footer>
  )
};

MainFooter.propTypes = {
  // Whether the content is contained, or not.
  contained: PropTypes.bool,

  // The menu items array.
  menuItems: PropTypes.array,

  // The copyright info.
  copyright: PropTypes.string
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © 2019 Cerveja Artesanal Net",
  menuItems: [
    {
      title: "Home",
      to: "#"
    },
    {
      title: "Services",
      to: "#"
    },
    {
      title: "About",
      to: "#"
    },
    {
      title: "Products",
      to: "#"
    },
    {
      title: "Blog",
      to: "#"
    }
  ]
};

export default MainFooter;
