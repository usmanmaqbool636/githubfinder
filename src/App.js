import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/alert';
import About from './components/pages/About';
import "./grid.css";
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);
  const [alert, setAlert] = useState(null);
  const searchUser = async (text) => {
    setAlert(null);
    setloading(true)

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setloading(false)
    setUsers(res.data.items);

  }

  // const getSingleUser = async (username) => {
  //   setloading(true);
  //   const res = await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //     &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   setloading(true)
  //   setUsers(res.data.items);
  //   return res.data;
  // }

  const clearUser = () => {
    setloading(false)
    setUsers([]);
  }
  const setalert = (msg, type) => {

    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/" render={(props) => {
              return (
                <>
                  <Search searchUser={searchUser} clearUser={clearUser}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setalert}
                  />
                  <Users loading={loading} users={users} />
                </>
              )
            }} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" render={(props) => {
              return <User {...props} />
            }} />

          </Switch>
        </div>
      </div>
    </Router>
  )
}


export default App;
