import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';

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
        const {project} = this.props;
        this.props.updateProject({
            id: project.id,
            title: this.state.title ? this.state.title : project.title,
            summary: this.state.summary ? this.state.summary : project.summary,
            content: this.state.content ? this.state.content : project.content,
            technologyUsed: this.state.technologyUsed ? this.state.technologyUsed : project.technologyUsed,
            git: this.state.git ? this.state.git : project.git,
        });
        this.props.history.push('/');
    }

    render() {
        const {project, auth, authError} = this.props;
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
                                                <label className="active" htmlFor="title">Title</label>
                                                <input type="text" id="title" onChange={this.handleChange} defaultValue={project.title}/>
                                            </div>

                                            <div className="input-field">
                                                <label className="active" htmlFor="summary">Summary</label>
                                                <input type="text" id="summary" onChange={this.handleChange} defaultValue={project.summary} />
                                            </div>

                                            <div className="input-field">
                                                <label className="active" htmlFor="content">Content</label>
                                                <input type="text" id="content" onChange={this.handleChange} defaultValue={project.content}/>
                                            </div>

                                            <div className="input-field">
                                                <label className="active" htmlFor="git">Git link (Optional)</label>
                                                <input type="text" id="git" onChange={this.handleChange} defaultValue={project.git}/>
                                            </div>

                                            <div className="input-field">
                                                <label className="active" htmlFor="technologyUsed">TechnologyUsed (CSV)</label>
                                                <input type="text" id="technologyUsed" onChange={this.handleChange} defaultValue={project.technologyUsed}/>
                                            </div>
                                            
                                        </div>
                                        <div className="input-field">
                                            <button className="btn pink lighten-1 z-depth-0">Create</button>
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
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        project: {...project, id},
        projectId: id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProject: (project) => dispatch(updateProject(project))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'projects'}]))(CreateProject)

