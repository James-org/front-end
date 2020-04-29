import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//components
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import ContributerUserProfile from './components/ContributerUserProfile';
// import ViewerUserProfile from './components/ViewerUserProfile';
import EditHowTo from './components/EditHowTo';
//privateroute import
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
    <Switch>
   
    <Route exact path='/' component={Signup}/>
    <Route path='/login' component={Login}/>
  

    {/* Private Routes */}
    {/* route to the view/save howTo page */}
    {/* <PrivateRoute path='/user-view-dashboard' component={ViewerUserProfile}/>  */}
    {/* route to the contributor/create New howto Page */}
    <PrivateRoute path='/user' component={ContributerUserProfile}/>
    <PrivateRoute path='/update-howto/:id' component={EditHowTo}/>
    

    </Switch>
      
    </div>
  );
}

export default App;
