import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Start</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="navbar-item">
              <Link to="/register" className="nav-link">Register</Link>
              </li>
              <li className="navbar-item">
              <Link to="/home" className="nav-link">Home</Link>
              </li>
            </ul>
            </div>
          </nav>
    
        )
    }
}

