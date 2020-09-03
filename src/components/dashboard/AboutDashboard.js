import React, {Component} from 'react';
import './aboutCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class AboutDashboard extends Component {
    render() {
        return(
            <div className="parent">
                <div className="businessCard materialize">
                    <div className="background">
                        <div className="diagonals"> </div>
                    </div>
                    <div className="card-panel z-depth-4 hoverable">
                        <div className="col s8 leftSide">
                            <div className="row nameAndTitleSection">
                                <div className="fullName col s12">Jade Martin</div>
                                <div className="divider col s12" id="styleNeed"></div>
                                <div className="jobTitle col s11 offset-s1">Computer science & Psychology student</div>
                            </div>
                            <div className="row">
                                <div className="col s11 offset-s1 linksAndDetailsSection">
                                    <div className="emailAddress col s12 valign-wrapper">
                                        <div className="iconWrapper z-depth-2 iconsSolidBackground">
                                            <div className="icon">
                                                <i className="material-icons left">email</i>
                                            </div>
                                        </div>
                                        <div className="textWrapper"> 
                                            <span>Jademmb@gmail.com</span> 
                                        </div>
                                    </div>
                                    <div className="rowJoinerWrapper"><div className="rowJoiner iconsSolidBackground"></div></div>
                                    <div className="geography col s12 valign-wrapper">
                                        <div className="iconWrapper z-depth-2 iconsSolidBackground">
                                            <div className="icon">
                                                <i className="material-icons left">map</i>
                                            </div>
                                        </div>
                                        <div className="textWrapper">
                                            <span>University of Canterbury</span>
                                        </div>
                                    </div>
                                    <div className="rowJoinerWrapper"><div className="rowJoiner iconsSolidBackground"></div></div>
                                    <div className="linkedInURL col s12 valign-wrapper">
                                        <div className="iconWrapper z-depth-2 iconsSolidBackground">
                                            <div className="icon">
                                                <a href="https://www.linkedin.com">
                                                    <i className="material-icons left"></i><FontAwesomeIcon icon={faLinkedinIn} className="fab fa-lg iconsSolidBackground" aria-hidden="true"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="textWrapper">
                                            <a href="https://www.linkedin.com">LinkedIn</a>
                                        </div>
                                    </div>
                                    <div className="rowJoinerWrapper"><div className="rowJoiner iconsSolidBackground"></div></div>
                                    <div className="codingProfileURL col s12 valign-wrapper">
                                        <div className="iconWrapper z-depth-2 iconsSolidBackground">
                                            <div className="icon">
                                                <a href="https://github.com/JadeMartin">
                                                    <i className="material-icons left"></i><FontAwesomeIcon icon={faGithub} className="fab fa-lg iconsSolidBackground" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="textWrapper">
                                            <a href="https://github.com/JadeMartin">Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s4 rightSide">
                            <div className="ageWrapper col s12 center">
                                <span>Gradutating: November 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutDashboard