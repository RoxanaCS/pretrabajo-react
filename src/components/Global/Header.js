import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Ecommerce React</h1>
        </div>
      </div>
    );
  }
}

export default Header;
