import React from 'react';
import './Header.css';

const Header = () => (
    <header className="header">
        <h1 className="logo">Hi-Tech Shop</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
        </nav>
    </header>
);

export default Header;