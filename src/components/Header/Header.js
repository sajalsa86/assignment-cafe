import React from 'react';
import './Header.css';
// Import the image
import profileImage from '../../images/profile.png';
const Header = () => {
    ;
    return (
        <header>
            <nav>
                <h2>Knowledge Cafe</h2>
                <img src={profileImage} alt="" />
            </nav>
            <hr></hr>
        </header>
    );
};

export default Header;
