import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="site-logo">
            <img src={Logo} alt="site logo" />

            <div className="site-navigation">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;