import React, {Component} from 'react';
import ImageList from '../images/ImageList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class ProjectDashboard extends Component {
    render() {
        const {images, auth} = this.props;
        if(!auth.uid) return <Redirect to='/'/>
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col">
                        <ImageList images={images}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.firestore.ordered.images,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'images'}]))
    (ProjectDashboard)