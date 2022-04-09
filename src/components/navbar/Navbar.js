import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" style={{textDecoration:'none'}}>
            <div className="navdiv">
                <span>T</span>
                <span>E</span>
                <span>C</span>
                <span>H</span>
                <span>V</span>
                <span>Y</span>
                <span>O</span>
                <span>M</span>
            </div>
            </Link>
        </div>
    )
}

export default Navbar
