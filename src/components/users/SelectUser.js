import React, {Component} from 'react';
import UserList from './UserList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class SelectUser extends Component {
    render() {
        const {users, auth} = this.props;
        if(!auth.uid) return <Redirect to='/'/>
        return(
            <div className="dashboard container">
                <h1 className="white-text">Users</h1>
                <UserList users={users} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'users'}]))
    (SelectUser)