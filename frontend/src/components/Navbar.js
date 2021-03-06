import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as sessionSelector from '../selectors/sessions';
import {logoutUser} from '../actions/sessions';
const Navbar = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(sessionSelector.isLogged);
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to = '/' className="navbar-brand">Blogging App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to = '/users' className="nav-link">Users </Link>
      </li>
      <li className="nav-item">
        <Link to = '/articles' className="nav-link">Articles</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      {!isLogged && <li className="nav-item"><Link to = '/login'className="nav-link">Login</Link></li>}
      {!isLogged && <li className="nav-item"><Link to = '/signup'className="nav-link">Signup</Link></li>}
      {isLogged && <li className = "nav-item"><button className = "btn nav-link" onClick = {() => dispatch(logoutUser())}>Sign out</button></li>}
    </ul>
  </div>
</nav>
      </React.Fragment>
    );
}
 
export default Navbar;