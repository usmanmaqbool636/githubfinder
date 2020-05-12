import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar';
import User from './components/users/User';
import Alert from './components/layout/alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import "./grid.css";
import AlertState from './Context/alert/alertState';
import GithubState from './Context/github/GithubState';
const App = () => {
  return (
    <AlertState>

      <GithubState>
        <Router>
          <div className="App">
            <Navbar />

            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  )
}


export default App;
