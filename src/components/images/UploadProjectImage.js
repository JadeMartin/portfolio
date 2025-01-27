import React, {Component} from 'react';
import { connect } from 'react-redux';
import {storage} from '../../config/fbConfig';
import {uploadPhotoToDb} from '../../store/actions/photoActions';
import {Redirect} from 'react-router-dom';


class UploadImage extends Component {
    
    state = {
        image: null,
        progress: 0,
        error: null
    }

    handleChange = (e) => {
        if (e.target.files[0]) {
            this.setState({
                ...this.state,
                image: e.target.files[0],
                });
        }
    };

    handleUpload = () => {

        const uploadTask = storage.ref('images/' + this.state.image.name).put(this.state.image);
        uploadTask.on(
            'state_changed',
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({
                    ...this.state,
                     progress,
                });
            },
            error => {
                this.setState({
                    ...this.state,
                    error: error
                });
            },
            () => {
                storage
                    .ref('images')
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then(url => {
                        this.props.uploadPhotoToDb(url, this.state.image.name);
                    });
            }
        )
    };

    render() {
        const {authError, auth} = this.props;
        if(!auth.uid) return <Redirect to='/'/>
        return (
            <div className="container" id="containerUpload">
                <div className="row valign-wrapper" id="rowUpload">
                    <div className="col s0 offset-s3 valign" >
                        <div className="card hoverable" id="uploadCard">
                            <div className="card-content">
                                <span className="card-title">Upload project image</span>
                                <progress value ={this.state.progress}max="100"/> {this.state.progress}%
                            </div>
                            <div className="card-action">
                                <input type="file" onChange={this.handleChange} />
                                <button onClick={this.handleUpload}>Upload</button>
                                <div className="red-text center">
                                    {this.state.error ? <p>{this.state.error}</p> : null}
                                    {authError ? <p>{authError}</p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uploadPhotoToDb: (url, photoName) => dispatch(uploadPhotoToDb(url, photoName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage)