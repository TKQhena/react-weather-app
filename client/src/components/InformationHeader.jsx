import React from 'react';
import logo from '../img/simp_logo.png';
import '../styles.css'

function Header(){
    return(
        <header class="headerLogo">
            <img class="simp_logo" src={logo} alt="Logo" />
        </header>
    );
}

export default Header;