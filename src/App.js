import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProjectDashboard from './components/dashboard/ProjectDashboard';
import AboutDashboard from './components/dashboard/AboutDashboard';
import ProjectDetails from './components/projects/ProjectDetails'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProjectDashboard} />
          <Route path="/about" component={AboutDashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
