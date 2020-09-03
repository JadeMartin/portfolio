import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title center">{project.title}</span>
                <p>{project.summary}</p>
                <p className="grey-lighten-4 grey-text">{project.technologyUsed}</p>

            </div>
        </div>
    )
}

export default ProjectSummary