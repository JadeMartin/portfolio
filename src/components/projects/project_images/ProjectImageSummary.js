import React from 'react';
import ModalImage from "react-modal-image";

const ProjectImageSummary = ({ image, app }) => {

    const imageView = app ? (<img src={image.url} alt={image.photoName}/>) : (<ModalImage id={image.photoName}
        small={image.url}
        medium={image.url}
        alt={image.photoName}
        />)

    return (
        <div className="card hoverable">
            <div className="card-image " id="imageClick">
                {imageView}
            </div>
        </div>
    )
}

export default ProjectImageSummary
