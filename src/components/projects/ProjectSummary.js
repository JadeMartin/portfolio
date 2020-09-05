import React from 'react';
import {Link} from 'react-router-dom';

const ProjectSummary = ({ project }) => {
    const icon = project.icon ? (<img className="responsive-img" src={project.icon} alt="No Icon"/>) : null;
    return (
            <div className="card hoverable">
                <div className="card-content">
                    {icon}
                    <h5>{project.title}</h5>
                    <p>{project.summary}</p>
                </div>
                <div className="card-action">
                    <p className="grey-lighten-4 grey-text">{project.technologyUsed}</p>
                    <Link to={"/project/" + project.id}>Read more...</Link> </div> 
            </div>
    )
}

export default ProjectSummary