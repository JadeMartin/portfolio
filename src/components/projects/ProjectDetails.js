import React from 'react';

const ProjectDetails = () => {
    const project = {
        title: "Project title",
        summary: "Project summary",
        content: "Project content",
        technology: "Java, SQL"
    }

    //TODO - Add optional icon and optional images? expand on formatting

    if(project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey-lighten-4 grey-text">
                        <div>{project.technology}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }

}

export default ProjectDetails