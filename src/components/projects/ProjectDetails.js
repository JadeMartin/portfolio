import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {deleteProject} from '../../store/actions/projectActions';
import { FaGithub, FaExternalLinkAlt, FaGooglePlay } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import ProjectImageList from './project_images/ProjectImageList';


const ProjectDetails = (props) => {
    const {project, auth, images} = props;
    let imageTitle = 'Images';
    if (images === undefined || images.length < 1) {
        imageTitle = null;
    }
    const adminOptions = auth.uid ? (
        <p>
            <Link to={'/projects/update/' + project.id} > 
                <AiFillEdit className="material-icons blue-text"/>
            </Link>
            <Link to={'/'} >  
                <i onClick={props.deleteProject} className="material-icons blue-text">delete</i>
            </Link>
        </p>
    ) : null;

    const gitLink = project.git ? (
        <a href={project.git}> <FaGithub className="material-icons left iconsSolidBackground" aria-hidden="true" /></a>
    ) : null;

    const webLink = project.webSite ? (
        <a href={project.webSite}> <FaExternalLinkAlt className="material-icons left iconsSolidBackground" aria-hidden="true" /></a>
    ) : null;

    const appStore = project.appStore ? (
        <a href={project.appStore}> <FaGooglePlay className="material-icons left iconsSolidBackground" aria-hidden="true" /></a>
    ) : null;

    const icon = project.icon ? (
        <img src={project.icon} alt={project.title}/>
    ) : null;



    if(project) {
        return (
            <div className="container section project-details">
                <div className="card hoverable">
                    <div className="card-content">
                        <div className="right">{adminOptions}{gitLink}{webLink}{appStore}</div>
                        <div className="left">{icon}</div>
                        <span className="card-title"><h1>{project.title}</h1></span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey-lighten-4 grey-text">
                        <div>{project.technologyUsed}</div>
                    </div>
                </div>
            <div className="images container">
                <h1 className="white-text">{imageTitle}</h1>
                <ProjectImageList images={images}/>
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
    const images = state.firestore.ordered.images;
    return {
        project: {id, ...project},
        auth: state.firebase.auth,
        images: images

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteProject: () => dispatch(deleteProject(ownProps.match.params.id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => {return ([{collection: 'projects'}, {collection: 'images', where:[['projectId', '==', props.match.params.id]]}])}))
    (ProjectDetails)