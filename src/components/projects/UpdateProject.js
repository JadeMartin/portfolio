import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';

class UpdateProject extends Component {
    state = {
        title: '',
        summary: '',
        content: '',
        technologyUsed: '',
        git: '',
        priority: 0,
        webSite: '',
        appStore: '',
        recent: false,
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
            priority: this.state.priority ? this.state.priority : project.priority,
            webSite: this.state.webSite ? this.state.webSite : project.webSite,
            appStore: this.state.appStore ? this.state.appStore : project.appStore,
            recent: this.state.recent === 'true',
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
                                            <h5 className="card-title grey-text text-darken-3">Update project</h5>

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
                                                <label className="active" htmlFor="technologyUsed">TechnologyUsed (CSV)</label>
                                                <input type="text" id="technologyUsed" onChange={this.handleChange} defaultValue={project.technologyUsed}/>
                                            </div>

                                            <div className="input-field">
                                                <label className="active" htmlFor="priority">Priority level (higher means more likely to be shown first)</label>
                                                <input type="number" id="priority" onChange={this.handleChange} defaultValue={project.priority}/>
                                            </div>

                                            <div className="input-field">
                                                <label className="active" htmlFor="recent">Recent? adds a badge to the card default false</label>
                                                <input type="text" id="recent" onChange={this.handleChange} defaultValue={project.recent} />
                                            </div>

                                            <div className="input-field">
                                                <label className="active" htmlFor="git">Git link (Optional)</label>
                                                <input type="text" id="git" onChange={this.handleChange} defaultValue={project.git}/>
                                            </div>
                                            
                                            <div className="input-field">
                                                <label className="active" htmlFor="appStore">App store link (Optional)</label>
                                                <input type="text" id="appStore" onChange={this.handleChange} defaultValue={project.appStore} />
                                            </div>

                                            <div className="input-field">
                                                <label className="active" htmlFor="webSite">Website link (Optional)</label>
                                                <input type="text" id="webSite" onChange={this.handleChange} defaultValue={project.webSite} />
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
    firestoreConnect([{collection: 'projects'}]))(UpdateProject)

