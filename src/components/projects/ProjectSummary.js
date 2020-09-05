import React from 'react';
import {Link} from 'react-router-dom';

const ProjectSummary = ({ project }) => {
    const icon = project.icon ? (<img className="responsive-img" src={project.icon} alt="No Icon"/>) : null;
    return (
            <div className="card hoverable">
                <div className="card-content">
                    <span className="card-title">{icon}{project.title}</span>
                    <p>{project.summary}</p>
                </div>
                <div className="card-action">
                    <p className="grey-text">{project.technologyUsed}</p>
                    <Link to={"/project/" + project.id}> <p className="blue-text linkedInURL">Read more... </p></Link> </div> 
            </div>
    )
}

export default ProjectSummary