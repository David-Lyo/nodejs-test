import React from 'react';
import { Link } from 'react-router-dom';
import nodejsLogo from '../nodejs-logo.svg';
import reactLogo from '../react-logo.svg';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-logo" to="https://nodejs.org" target="_blank">
          <img src={nodejsLogo} />
        </Link>
        <Link className="navbar-logo" to="https://react.dev" target="_blank">
          <img src={reactLogo} />
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to="/about">Tools & Services</Link>
          <Link className="navbar-link" to="/markets">Markets</Link>
          <Link className="navbar-link" to="/pricing">Plans</Link>
          <Link className="navbar-link" to="/docs">API</Link>
        </div>
        <button className="navbar-signup">
          <p to="/docs">Sign Up</p>
        </button>
      </nav>
    </>
  );
}

export default Navbar