import React from 'react';
import {Link} from 'react-router-dom';
import './projectCard.css';

const ProjectSummary = ({ project }) => {
    const badge = project.recent ? (<span class="card-badge orange"><i class="material-icons">fiber_new</i> Recently added! </span>) : null;
    const projectIcon = project.icon ? (
    <img className="responsive-img" src={project.icon} alt="No Icon">
        {badge}
        <span className="card-title">{project.title}</span>
    </img>
    ) : (
    <img className="responsive-img"src="https://placehold.it/320x240" alt="No Icon">
        {badge}
        <span className="card-title">{project.title}</span>
    </img>
    );

    return (
            <div className="card hoverable">
                <div className="card-image">
                    {projectIcon}
                </div>
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