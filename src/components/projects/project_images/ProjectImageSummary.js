import React from 'react';

const ProjectImageSummary = ({ image }) => {

    return (
        <div className="card hoverable">
            <div className="card-image">
                <p><img className="responsive-img" src={image.url} alt={image.photoName} /></p>
            </div>
        </div>
    )
}

export default ProjectImageSummary
