import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri';
import {updateProject} from '../../store/actions/projectActions';
import {updateImage} from '../../store/actions/photoActions';
import {deleteImage} from '../../store/actions/photoActions';
import {BiUnlink} from 'react-icons/bi';
import {storage} from '../../config/fbConfig';





class LinkImage extends Component {

    state = {
        listOpen: false,
        headerTitle: "Select project to link with",
        project: null,
        linkConfirmation: null
    }

    handleClickOutside(){
        this.setState({
            listOpen: false
        })
    }
    
    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    handleClickIcon = () => {
        const {image} = this.props;
        this.props.updateProject({...this.state.project, icon: image.url});
        this.setState({
            ...this.state,
            linkConfirmation: "Linked to project icon"
        })
    }

    handleClickImage = () => {
        const {image} = this.props;
        const projectId = this.state.project.id;
        this.props.updateImage({...image, projectId: projectId}, this.props.match.params.id);
        this.setState({
            ...this.state,
            linkConfirmation: "Linked to project"
        })
    }

    handleUnlink = () => {
        const {image, projects} = this.props;
        const unLinkImage = image.projectId ? image : null;
        console.log(projects);
        let projectFind = projects.find(i => i.icon === image.url);
        console.log(projectFind);
        const project = projectFind ? projectFind : null;

        if(project != null) {
            this.props.updateProject({
                content: project.content,
                git: project.git ? project.git : "",
                id: project.id,
                summary: project.summary,
                technologyUsed: project.technologyUsed ? project.technologyUsed : "",
                title: project.title,
                icon: "",
            });
        }
        if(unLinkImage != null){
            this.props.updateImage({
                photoName: unLinkImage.photoName,
                url: unLinkImage.url,
                projectId: ""
            }, this.props.match.params.id);
        }
        this.setState({
            ...this.state,
            linkConfirmation: "Unlinked from project"
        })
    }

    handleDeleteClick = () => {
        const {image} = this.props;
        this.handleUnlink();
        this.props.deleteImage();
        storage.ref('images').child(image).delete();
    }

    render() {
        const {image, auth, projects} = this.props;
        if(!auth.uid) return <Redirect to='/'/>
        const {listOpen} = this.state;
        if(image) {
            return (
                <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="right">
                        <BiUnlink className="material-icons blue-text" onClick={this.handleUnlink}/>
                        <a href="/images" onClick={this.handleDeleteClick}> 
                            <i className="material-icons blue-text">delete</i>
                        </a>
                    </div>
                    <span className="card-title center">{image.photoName} </span>
                    <p><img src={image.url} alt={image.photoName}/></p>
                </div>
                <div className="dd-wrapper">
                    <div className="dd-header" onClick={() => this.toggleList()}>
                        <div className="dd-header-title">{this.state.headerTitle}</div>
                        {listOpen ? <i><RiArrowDropUpLine/></i> :<i><RiArrowDropDownLine/></i>}

                        {listOpen && <ul className="dd-list">
                            {projects.map((project) => (
                                <li className="dd-list-item" key={project.id} onClick={ () => this.setState({...this.state, headerTitle: project.title, project : project})}>{project.title}</li>
                            ))}
                        </ul>}  
                    </div>
                    <div>
                        <button onClick={this.handleClickIcon}>Set Icon</button> <button onClick={this.handleClickImage}>Set as image</button> 
                        <p>{this.state.linkConfirmation}</p>
                    </div>
                </div>
            </div>
            )
        } else {
            return (
                <div className="container center">
                    <p>No image...</p>
                </div>
            )
        }
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const images = state.firestore.data.images;
    const image = images ? images[id] : null;
    return {
        image: image,
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteImage: () => dispatch(deleteImage(ownProps.match.params.id)),
        updateImage: (image) => dispatch(updateImage(image, ownProps.match.params.id)),
        updateProject: (project) => dispatch(updateProject(project))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'images'}, {collection: 'projects'}
    ]))(LinkImage)