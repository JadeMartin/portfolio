import React from 'react';

const ProjectImageSummary = ({ image }) => {
    
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <p><img src={image.url} alt={image.photoName}/></p>
            </div>
        </div>
    )
}

export default ProjectImageSummary
