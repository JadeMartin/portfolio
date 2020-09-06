import React from 'react';
import './aboutCard.css';
import {FaGithub, FaLinkedinIn, FaUniversity} from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import Draggable from 'react-draggable';


const UserCard = ({user}) => {
    return(
        <Draggable>
                <div className="parent">
                    <div className="businessCard materialize hoverable">
                        <div className="background">
                            <div className="dagonals"> </div>
                        </div>
                        <div className="card-panel z-depth-4 hoverable">
                            <div className="col s8 leftSide">
                                <div className="row nameAndTitleSection">
                                    <div className="fullName col s12">{user[0].firstName} {user[0].lastName}</div>
                                    <div className="divider col s12" id="styleNeed"></div>
                                    <div className="jobTitle col s11 offset-s1">{user[0].currentRole}</div>
                                </div>
                                <div className="row">
                                    <div className="col s11 offset-s1 linksAndDetailsSection">
                                        <div className="emailAddress col s12 valign-wrapper">
                                            <div className="iconWrapper z-depth-2 iconsSolidBackground">
                                                <div className="icon">
                                                    <HiOutlineMailOpen className="material-icons left" aria-hidden="true"/>
                                                </div>
                                            </div>
                                            <div className="textWrapper"> 
                                                <span>{user[0].email}</span> 
                                            </div>
                                        </div>
                                        <div className="rowJoinerWrapper"><div className="rowJoiner iconsSolidBackground"></div></div>
                                        <div className="geography col s12 valign-wrapper">
                                            <div className="iconWrapper z-depth-2 iconsSolidBackground">
                                                <div className="icon">
                                                    <FaUniversity className="material-icons left" aria-hidden="true"/>
                                                </div>
                                            </div>
                                            <div className="textWrapper">
                                                <span>{user[0].education}</span>
                                            </div>
                                        </div>
                                        <div className="rowJoinerWrapper"><div className="rowJoiner iconsSolidBackground"></div></div>
                                        <div className="linkedInURL col s12 valign-wrapper">
                                            <div className="iconWrapper z-depth-2 iconsSolidBackground">
                                                <div className="icon">
                                                    <a href={user[0].linkedIn}>
                                                        <FaLinkedinIn className="material-icons left iconsSolidBackground" aria-hidden="true"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="textWrapper">
                                                <a href={user[0].linkedIn}>LinkedIn</a>
                                            </div>
                                        </div>
                                        <div className="rowJoinerWrapper"><div className="rowJoiner iconsSolidBackground"></div></div>
                                        <div className="codingProfileURL col s12 valign-wrapper">
                                            <div className="iconWrapper z-depth-2 iconsSolidBackground">
                                                <div className="icon">
                                                    <a href={user[0].github}>
                                                        <FaGithub className="material-icons left iconsSolidBackground" aria-hidden="true" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="textWrapper">
                                                <a href={user[0].gitHub}>Github</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4 rightSide">
                                <div className="ageWrapper col s12 center">
                                    <span>{user[0].roleStatus}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
    )
}

export default UserCard