import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    background: '#111',
    color: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontWeight: 600,
  };

  return (
    <header style={navStyle}>
      <div style={{ fontSize: '18px', fontWeight: 700 }}>My Company</div>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
