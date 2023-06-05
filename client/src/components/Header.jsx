import React from 'react';
import logo from '../img/full_Logo.png'; // Import the logo image
import '../styles.css';

function Header() {
  return (
    <header className="header-home">
      <img className="logo-home" src={logo} alt="Logo" />
    </header>
  );
}

export default Header;