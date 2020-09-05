import React from 'react';

const ImageSummary = ({ image }) => {
    
    return (
        <div className="card hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <p><img className="responsive-img" src={image.url} alt={image.photoName}/></p>
            </div>
            <div className="card-content">
                <p>{image.photoName}</p>
            </div>
        </div>
    )
}

export default ImageSummary
