import React from 'react';
import ImageSummary from './ImageSummary';
import {Link} from 'react-router-dom';

const ImageList = ({images}) => {
    return (
        <div className="imagelist section">
            { images && images.map(image => {
                return (
                    <Link to={'/image/' + image.id} key={image.id}>
                        <ImageSummary image={image}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default ImageList