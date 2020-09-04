import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {deleteProject} from '../../store/actions/projectActions';
import { FaGithub } from 'react-icons/fa';

const ProjectDetails = (props) => {
    const {project, auth} = props;
    //TODO - Add optional icon and optional images? expand on formatting
    const adminOptions = auth.uid ? (
        <p>
            <Link to={'/update/' + project.id} key={project.id}> 
                <i className="material-icons blue-text">settings</i>
            </Link>
            <a href="/" onClick={props.deleteProject}> 
                <i className="material-icons blue-text">delete</i>
            </a>
        </p>
    ) : null;

    const gitLink = project.git ? (
        <a href={project.git}> <FaGithub className="material-icons left iconsSolidBackground" aria-hidden="true" /></a>
    ) : null;


    if(project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="right">{adminOptions}{gitLink}</div>
                        <span className="card-title">{project.title} </span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey-lighten-4 grey-text">
                        <div>{project.technologyUsed}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: {id, ...project},
        auth: state.firebase.auth

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteProject: () => dispatch(deleteProject(ownProps.match.params.id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'projects'}
    ]))(ProjectDetails)