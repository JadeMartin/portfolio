import React from 'react';
import ImageSummary from './ImageSummary';
import {Link} from 'react-router-dom';

const ImageList = ({images}) => {
    return (
        <div className="row center-cols center-align">
            { images && images.map(image => {
                return (
                    <div className="col m4" key={image.id}>
                        <Link to={'/image/' + image.id} >
                            <ImageSummary image={image}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ImageList