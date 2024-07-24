import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import nodejsLogo from '../nodejs-logo.svg';
import reactLogo from '../react-logo.svg';
import './Navbar.css';

function Navbar() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 800) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="https://nodejs.org" target="_blank">
        <img alt="" src={nodejsLogo} />
      </Link>
      <Link className="navbar-logo" to="https://react.dev" target="_blank">
        <img alt="" src={reactLogo} />
      </Link>
      {button && <div className="navbar-links">
        <Link className="navbar-link" to="/about">Tools & Services</Link>
        <Link className="navbar-link" to="/markets">Markets</Link>
        <Link className="navbar-link" to="/pricing">Plans</Link>
        <Link className="navbar-link" to="/docs">API</Link>
      </div>}
      {button && <button className="navbar-signup">
        <p to="/docs">Sign Up</p>
      </button>}
      {!button && <button className="navbar-burger">
        <i className="bi bi-list"></i>
      </button>}
    </nav>
  );
}

export default Navbar