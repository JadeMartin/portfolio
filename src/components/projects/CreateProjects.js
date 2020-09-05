import React, {Component} from 'react';
import { connect } from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        summary: '',
        content: '',
        technologyUsed: '',
        git: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    }

    render() {
        const {authError, auth} = this.props;
        if(!auth.uid) return <Redirect to='/'/>
        return (
                    <form onSubmit={this.handleSubmit} >
                        <div className="container" id="containerUpload">
                            <div className="row valign-wrapper" id="rowUpload">
                                <div className="col s0 offset-s3 valign" ></div>
                                    <div className="card hoverable" id="createCard">
                                        <div className="card-content">
                                            <h5 className="card-title grey-text text-darken-3">Create new project</h5>

                                            <div className="input-field">
                                                <label htmlFor="title">Title</label>
                                                <input type="text" id="title" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="summary">Summary</label>
                                                <input type="text" id="summary" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="content">Content</label>
                                                <input type="text" id="content" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="git">Git link (Optional)</label>
                                                <input type="text" id="git" onChange={this.handleChange} />
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="technologyUsed">TechnologyUsed (CSV)</label>
                                                <input type="text" id="technologyUsed" onChange={this.handleChange}/>
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="priority">Priority level (higher means more likely to be shown first)</label>
                                                <input type="number" id="priority" onChange={this.handleChange} />
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
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
