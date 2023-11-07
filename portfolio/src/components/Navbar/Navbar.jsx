import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pf__navbar">
      <div className="pf__navbar-links">
        <div className="pf__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="pf__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About Me</a></p>
          <p><a href="#resume">Resume</a></p>
          <p><a href="#projects">Projects</a></p>
        </div>
      </div>
      <div className="pf__navbar-contact">
        <a href='#footer'>Contact Me</a>
      </div>
      <div className="pf__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="pf__navbar-menu_container scale-up-center">
          <div className="pf__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About Me</a></p>
            <p><a href="#projects">Projects</a></p>
            <p><a href="#resume">Resume</a></p>
          </div>
          <div className="pf__navbar-menu_container-links-contact">
            <button type="button">Contact Me</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;