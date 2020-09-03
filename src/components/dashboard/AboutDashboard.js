import React, {Component} from 'react';
import './Dashboard.css';

class AboutDashboard extends Component {
    render() {
        return(
            <div className="container section project-details center">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Jade Martin</span>
                        <p>Currently in my last semester of universiy studying computer science & psychology at the universiy of canterbury</p>
                        <p>I have a passion for programming and software development</p>
                    </div>
                    <div className="card-action grey-lighten-4 grey-text">
                        <div>
                        <p>Contact Info & links </p>
                        <ul>
                            <p><i className="material-icons blue-text">phone</i>0210401707</p>
                            <p><i className="material-icons blue-text">email</i>Jademmb@gmail.com</p> 
                        </ul>
                        <a href="https://github.com/JadeMartin" className="icon"><img src="./img/git_icon.jpg" alt="Git" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutDashboard