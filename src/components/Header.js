import React from 'react';
import Logo from '../../src/images/logo.png';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={Logo}/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;