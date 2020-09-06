import React from 'react';
import ProjectImageSummary from './ProjectImageSummary';

const ProjectImageList = ({images}) => {
    return (
        <div className="row center-cols center-align">
            { images && images.map(image => {
                return (
                    <div className="col m4" key={image.id}>
                        <ProjectImageSummary image={image} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectImageList