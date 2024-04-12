import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">James Cullen</Link>
    </div>
    <div className="navbar-menu">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/resume" className="navbar-item">Resume</Link>
      <Link to="/about" className="navbar-item">About</Link>
    </div>
  </nav>
  );
}

export default NavBar;