import React from 'react';
import ProjectImageSummary from './ProjectImageSummary';

const ProjectImageList = ({images, app}) => {
    return (
        <div className="row center-cols center-align">
            { images && images.map(image => {
                return (
                    <div className="col m4" key={image.id}>
                        <ProjectImageSummary image={image} app={app} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectImageList