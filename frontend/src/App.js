import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Login from './components/Login';
import Signup from './components/Signup';
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = {Body} />
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/signup' component = {Signup} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
 
export default App;