import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";

import './styles.css';

import NavbarSearch from "./NavbarSearch";
import NavbarMenu from "./NavbarMenu";

const NavbarHomePage = ({ stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <NavbarSearch />
          <NavbarMenu />
        </Navbar>
      </Container>
    </div>
  );
};

NavbarHomePage.propTypes = {
  // The layout type where the Navbar is used.
  layout: PropTypes.string,

  // Whether the main navbar is sticky to the top, or not.
  stickyTop: PropTypes.bool
};

NavbarHomePage.defaultProps = {
  stickyTop: true
};

export default NavbarHomePage;
