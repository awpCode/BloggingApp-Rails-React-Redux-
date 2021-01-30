import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Login from './components/Login';
import Signup from './components/Signup';
import Users from './components/Users';
import Articles from './components/Articles';
import EditArticle from './components/EditArticle';
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = {Body} />
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/signup' component = {Signup} />

          <Route exact path = '/users' component = {Users} />
          <Route exact path = '/articles' component = {Articles} />
          <Route exact path = '/articles/:id/edit' component = {EditArticle} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
 
export default App;