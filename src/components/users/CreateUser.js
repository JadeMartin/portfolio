import React, {Component} from 'react';
import { connect } from 'react-redux';
import {createUser} from '../../store/actions/userActions';
import {Redirect} from 'react-router-dom';

class CreateUser extends Component {
    state = {
        firstName: '',
        lastName: '',
        currentRole: '',
        email: '',
        linkedIn: '',
        gitHub: '',
        roleStatus: '',
        education: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createUser(this.state);
        this.props.history.push('/');
    }

    render() {
        const {authError, auth} = this.props;
        if(!auth.uid) return <Redirect to='/'/>
        return (
                <form onSubmit={this.handleSubmit}>
                    <div className="container" id="containerUpload">
                            <div className="row valign-wrapper" id="rowUpload">
                                <div className="col s0 offset-s3 valign" ></div>
                                    <div className="card hoverable" id="createCard">
                                        <div className="card-content">
                                            <h5 className="card-title grey-text text-darken-3">Create new user</h5>

                                            <div className="input-field">
                                                <label htmlFor="firstName">First name</label>
                                                <input type="text" id="firstName" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="lastName">Last name</label>
                                                <input type="text" id="lastName" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" id="email" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="currentRole">Current role</label>
                                                <input type="text" id="currentRole" onChange={this.handleChange}/>
                                            </div>
                                            
                                            <div className="input-field">
                                                <label htmlFor="roleStatus">Current role status</label>
                                                <input type="text" id="roleStatus" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="education">Education</label>
                                                <input type="text" id="education" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="linkedIn">Link to your LinkedIn profile</label>
                                                <input type="text" id="linkedIn" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="github">Link to your Github profile</label>
                                                <input type="text" id="github" onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    <div className="card-action">
                                        <div className="input-field">
                                            <button className="btn pink lighten-1 z-depth-0">Create</button>
                                            <div className="red-text center">
                                                {authError ? <p>{authError}</p> : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
