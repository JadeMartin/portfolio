import React from 'react';
import ProjectSummary from './ProjectSummary';


const ProjectList = ({projects}) => {
    return (
        <div className="row center-cols center-align">
            { projects && projects.map(project => {
                return (
                    <div className="col m4"  key={project.id}>
                        <ProjectSummary project={project}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList