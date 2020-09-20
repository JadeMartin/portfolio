import React from 'react';
import ModalImage from "react-modal-image";

const ProjectImageSummary = ({ image }) => {

    return (
        <div className="card hoverable">
            <div className="card-image" id="imageClick">
                <ModalImage
                    small={image.url}
                    medium={image.url}
                    alt={image.photoName}
                    />
            </div>
        </div>
    )
}

export default ProjectImageSummary
