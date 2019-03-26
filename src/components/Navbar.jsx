import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <Link className="navbar-brand" to="/">Movie List</Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
