import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProjectDashboard from './components/dashboard/ProjectDashboard';
import AboutDashboard from './components/dashboard/AboutDashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import CreateProjects from './components/projects/CreateProjects';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProjectDashboard} />
          <Route path="/about" component={AboutDashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/login" component={SignIn} />
          <Route path="/create" component={CreateProjects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
