import React, {Component} from 'react';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class ProjectDashboard extends Component {
    render() {
        const {projects, auth} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col">
                        <ProjectList projects={projects}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects'}]))
    (ProjectDashboard)