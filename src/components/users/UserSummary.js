import React from 'react';
import {Link} from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import {BiLink} from 'react-icons/bi';
import {deleteUser} from '../../store/actions/userActions';
import {updateUser} from '../../store/actions/userActions';
import {connect} from 'react-redux';




const UserSummary = ({ user, deleteUser, linkedUser, updateUser }) => {

    function handleLink() {
        if(linkedUser != null) {
            updateUser({
                ...linkedUser,
                mainLink: false
            })
        }
        updateUser({
            ...user,
            mainLink: true
        })
    } 

    return (
            <div className="card hoverable">
                <div className="card-content">
                    <h5>{user.firstName} {user.lastName}</h5>
                    <p>{user.email}</p>
                </div>
                <div className="card-action">
                    <Link to={'/users/update/' + user.id} > 
                        <AiFillEdit className="material-icons blue-text right"/>
                    </Link>
                    <BiLink className="material-icons blue-text right" onClick={handleLink} ></BiLink>
                    <i className="material-icons blue-text right" onClick={deleteUser}>delete</i>
                </div>
            </div>
    )
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteUser: () => dispatch(deleteUser(ownProps.user.id)),
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default connect(null, mapDispatchToProps)
    (UserSummary)