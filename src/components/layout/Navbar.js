import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ title }) => {
  useEffect(() => {}, []);

  return (
    <nav className='navbar z'>
      <h1>{title}</h1>
      <div className='searches'>
        <NavLink exact to='/' activeClassName='selected'>
          Name Search
        </NavLink>
        <NavLink exact to='/hash' activeClassName='selected'>
          Hash Search
        </NavLink>
      </div>
      <NavLink exact to='/about' activeClassName='selected'>
        About
      </NavLink>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Subtitle Finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  //icon: PropTypes.string.isRequired
};

export default Navbar;
