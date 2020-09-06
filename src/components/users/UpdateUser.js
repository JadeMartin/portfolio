import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateUser} from '../../store/actions/userActions';
import {Redirect} from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';

class UpdateUser extends Component {
    state = {
        firstName: '',
        lastName: '',
        currentRole: '',
        email: '',
        password: '',
        linkedIn: '',
        github: '',
        roleStatus: '',
        education: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {user} = this.props;
        this.props.updateUser({
            id: this.props.match.params.id,
            firstName: this.state.firstName ? this.state.firstName : user.firstName,
            lastName: this.state.lastName ? this.state.lastName : user.lastName,
            currentRole: this.state.currentRole ? this.state.currentRole : user.currentRole,
            email: this.state.email ? this.state.email : user.email,
            linkedIn: this.state.linkedIn ? this.state.linkedIn : user.linkedIn,
            github: this.state.github ? this.state.github : user.github,
            roleStatus: this.state.roleStatus ? this.state.roleStatus : user.roleStatus,
            education: this.state.education ? this.state.education : user.education,
        });
        this.props.history.push('/users');
    }

    render() {
        const {user, authError, auth} = this.props;
        if(!auth.uid) return <Redirect to='/'/>
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="container" id="containerUpload">
                    <div className="row valign-wrapper" id="rowUpload">
                        <div className="col s0 offset-s3 valign" ></div>
                            <div className="card hoverable" id="createCard">
                                <div className="card-content">
                                    <h5 className="card-title grey-text text-darken-3">Update user</h5>

                                    <div className="input-field">
                                        <label className="active" htmlFor="firstName">First name</label>
                                        <input type="text" id="firstName" defaultValue={user.firstName} onChange={this.handleChange}/>
                                    </div>

                                    <div className="input-field">
                                        <label className="active" htmlFor="lastName">Last name</label>
                                        <input type="text" id="lastName" defaultValue={user.lastName} onChange={this.handleChange}/>
                                    </div>

                                    <div className="input-field">
                                        <label className="active" htmlFor="email">Email</label>
                                        <input type="text" id="email" defaultValue={user.email} onChange={this.handleChange}/>
                                    </div>

                                    <div className="input-field">
                                        <label className="active" htmlFor="currentRole">Current role</label>
                                        <input type="text" id="currentRole" defaultValue={user.currentRole} onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div className="input-field">
                                        <label className="active" htmlFor="roleStatus">Current role status</label>
                                        <input type="text" id="roleStatus" defaultValue={user.roleStatus} onChange={this.handleChange}/>
                                    </div>

                                    <div className="input-field">
                                        <label className="active" htmlFor="education">Education</label>
                                        <input type="text" id="education" defaultValue={user.education} onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div className="input-field">
                                        <label className="active" htmlFor="linkedIn">Link to your LinkedIn profile</label>
                                        <input type="text" id="linkedIn" defaultValue={user.linkedIn} onChange={this.handleChange}/>
                                    </div>

                                    <div className="input-field">
                                        <label className="active" htmlFor="github">Link to your Github profile</label>
                                        <input type="text" id="github" defaultValue={user.github} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                    <div className="input-field">
                                    <button className="btn pink lighten-1 z-depth-0">Update</button>
                                    <div className="red-text center">
                                        {authError ? <p>{authError}</p> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </form>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const users = state.firestore.data.users;
    const user = users ? users[id] : null;
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        user: {...user, id}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'users'}]))
    (UpdateUser)
