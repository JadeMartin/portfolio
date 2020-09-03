import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to="/create">New project</NavLink></li>
            <li><a href="/" onClick={props.signOut}>Log out</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)