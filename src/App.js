import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProjectDashboard from './components/dashboard/ProjectDashboard';
import UserDashboard from './components/dashboard/UserDashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import CreateProjects from './components/projects/CreateProjects';
import UpdateProjects from './components/projects/UpdateProject';
import Images from './components/dashboard/ImageDashboard';
import LinkImage from './components/images/LinkImage';
import UpdateUser from './components/users/UpdateUser';
import CreateUser from './components/users/CreateUser';
import SelectUser from './components/users/SelectUser';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProjectDashboard} />
          <Route path="/about" component={UserDashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/login" component={SignIn} />
          <Route path="/projects/create" component={CreateProjects} />
          <Route path="/projects/update/:id" component={UpdateProjects} />
          <Route exact path="/images" component={Images} />
          <Route path="/image/:id" component={LinkImage} />
          <Route path="/users/create" component={CreateUser} />
          <Route path="/users/update/:id" component={UpdateUser} />
          <Route exact path="/users" component={SelectUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
