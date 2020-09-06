import React, {Component} from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import UserCard from '../users/UserCard';


class AboutDashboard extends Component {

    render() {
        const {user, dummyUser} = this.props;
        let userInfo = user;
        if(typeof userInfo === 'undefined' || userInfo.length < 1) {
            userInfo = dummyUser;
        }
        return(
            <UserCard user={userInfo}/>
        )
    }
}

const mapStateToProps = (state) => {
    const user = state.firestore.ordered.users;
    const dummyUser = [{
        firstName: '',
        lastName: '',
        currentRole: '',
        email: '',
        linkedIn: '',
        gitHub: '',
        roleStatus: ''
    }];
    return {
        user: user,
        dummyUser: dummyUser
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect([{collection: 'users', where:[['mainLink', '==', true]]}]))(AboutDashboard)
    