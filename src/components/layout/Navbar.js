import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import SignedInLinks from './SignedinLinks';    
import {connect} from 'react-redux';


const Navbar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <SignedInLinks/> : null;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="left" id="navTitle">
                    <Link to='/' className="brand-logo">Portfolio</Link>
                </ul>
                <ul className="right">
                    <li><NavLink to="/">Projects</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    {links}
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)