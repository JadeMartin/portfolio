import React from 'react';
import UserSummary from './UserSummary';


const ProjectList = ({users}) => {
    let linkedUser = null;
    if(users) {
       linkedUser = users.find(i => i.mainLink === true) ? users.find(i => i.mainLink === true) : null;
    }
    return (
        <div className="row center-cols center-align">
            { users && users.map(user => {
                return (
                    <div className="col m4"  key={user.id}>
                        <UserSummary user={user} linkedUser={linkedUser}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList