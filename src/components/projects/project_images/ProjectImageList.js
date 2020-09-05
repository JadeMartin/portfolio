import React from 'react';
import ProjectImageSummary from './ProjectImageSummary';

const ProjectImageList = ({images}) => {
    return (
        <div className="imagelist section">
            { images && images.map(image => {
                return (
                    <ProjectImageSummary image={image}/>
                )
            })}
        </div>
    )
}

export default ProjectImageList