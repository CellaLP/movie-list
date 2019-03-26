
import React, { Component } from 'react';
import './components.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Movie List &#169; {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }
}

export default Footer;