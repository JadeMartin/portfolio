import React, {Component} from 'react';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';



class ProjectDashboard extends Component {
    render() {
        const {projects} = this.props;

        return(
            <div className="dashboard container">
                <h1 className="white-text">Projects</h1>
                <ProjectList projects={projects}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects', orderBy: [['priority', 'desc']]}]))
    (ProjectDashboard)