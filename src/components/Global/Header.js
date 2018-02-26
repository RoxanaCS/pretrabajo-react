import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  constructor() {
    super();// heredando de otra clase,  super llama al  header hereda de componet, // state definir el estado de nuestro componente
    this.state = {
      user: null
    };
    //Al utilizar el objeto this realizar un bindeo 
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);

  }

  componentWillMount() { // este metodo es un ciclo de vida, se dispara una vez en componente ha sifo renderizado
    firebase.auth().onAuthStateChanged(user => {  //devuelve un objeto usuario  , cada evz que salgamos o entramos tendra la info el usuario
      this.setState({ user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider(); //proveedor de google

    firebase.auth().signInWithPopup(provider) //este sgning devuelve una promesa
      .then(result => console.log(`${result.user.email} ha iniciado sesión `))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido `))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }


  renderLoginButton() {

    if (this.state.user) {
      return (
        <div>
          <img src={this.state.user.photoUrl} alt={this.state.user.displayName} />
          Hola {this.state.user.displayName}
          <button onClick={this.handleLogout}>salir</button>
        </div>
      );
    } else {
      //si no lo esta
      return (
        <button onClick={this.handleAuth}> Ingresar con google </button>
      );
    }
  }

  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Ecommerce React</h1>
        </div>
        <p className="App-intro">
          {this.renderLoginButton()}
        </p>
      </div>
    );
  }
}

export default Header;
