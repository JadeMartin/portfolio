import React from 'react';

const ProjectSummary = ({ image }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title center">{image.photoName}</span>
                <p><img src={image.url} alt={image.photoName}/></p>
            </div>
        </div>
    )
}

export default ProjectSummary
