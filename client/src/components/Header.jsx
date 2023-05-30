import React from 'react';
import logo from '../img/full_Logo.png'; // Import the logo image

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" />
    </header>
  );
}

export default Header;