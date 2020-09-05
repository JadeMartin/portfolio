import React, {Component} from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import UserCard from '../users/UserCard';


class AboutDashboard extends Component {

    render() {
        const {user} = this.props
        return(
            <UserCard user={user}/>
        )
    }
}

const mapStateToProps = (state) => {
    const user = state.firestore.ordered.users;
    const dummyUser = [{
        name: '',
        currentRole: '',
        email: '',
        linkedIn: '',
        gitHub: '',
        roleStatus: ''
    }]
    return {
        user: user ? user : dummyUser
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect([{collection: 'users', where:[['mainLink', '==', true]]}]))(AboutDashboard)
    