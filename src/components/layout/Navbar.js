import React from 'react';
import {NavLink, Link} from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="left">
                    <Link to='/' className="brand-logo">Portfolio</Link>
                </ul>
                <ul className="right">
                    <li><NavLink to="/">Projects</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar