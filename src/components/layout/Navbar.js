import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{title}</h1>
      <ul>
        <Link to='/'>Name Search</Link>
        <Link to='/hash'>Hash Search</Link>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Subtitle Finder"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
  //icon: PropTypes.string.isRequired
};

export default Navbar;
