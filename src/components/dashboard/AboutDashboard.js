import React, {Component} from 'react';

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
                        <p>Phone number: 0210401707</p>
                        <p>Email address: Jademmb@gmail.com</p>
                        <a href="#" className="blue-text">Github</a>
                        <a href="#" className="blue-text">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutDashboard