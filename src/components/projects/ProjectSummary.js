import React from 'react';
import {Link} from 'react-router-dom';
import './projectCard.css';


const ProjectSummary = ({ project }) => {
    console.log(project);
    const badge = project.recent ? (<span className="card-badge orange"><i className="material-icons" id="newIcon">fiber_new</i> {project.title} has been Recently added! </span>) : (<span className="card-title">{project.title}</span>);
    const projectIcon = project.icon ? (
        <div className="card-image">
            <img className="responsive-img" id="projectIcon" src={project.icon} alt="Project Icon"/>
            {badge}
        </div>
    ) : (
        <div className="card-image">
            <img className="responsive-img" id="projectIcon" src="https://placehold.it/400x280" alt="No Icon"/>
            {badge}
        </div>
    );



    

    return (
            <div className="card hoverable">
                {projectIcon}
                <div className="card-content">
                    <p>{project.summary}</p>
                </div>
                <div className="card-action">
                    <p className="grey-text">{project.technologyUsed}</p>
                    <Link to={"/project/" + project.id}> <p className="blue-text linkedInURL">Read more... </p></Link>
                </div>
            </div>
    )
}

export default ProjectSummary