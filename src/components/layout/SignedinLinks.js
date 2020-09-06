import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to="/images">Images</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/projects/create">New project</NavLink></li>
            <li><NavLink to="/users/create">New user</NavLink></li>
            <li><Link to="/" onClick={props.signOut}>Log out</Link></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)