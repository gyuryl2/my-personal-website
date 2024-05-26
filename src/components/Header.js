import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Assuming you will create a Header.css file for styling

function Header() {
    return (
        <div className="header">
            <div className="header-tab">
                <p className="header-text"><strong>Gyury Lee</strong></p>
            </div>
            <ul className="header-tab menu effect">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}


export default Header;
