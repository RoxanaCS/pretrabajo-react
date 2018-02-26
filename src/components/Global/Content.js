import React, { Component } from 'react';
import './css/Content.css';
import MercadoLibreApp from './MercadoLibreApp'


class Content extends Component {
  render() {
    return (
      <div className="Content">
        <h1>Lista de productos disponibles</h1>
        <MercadoLibreApp />
      </div>
    );
  }
}

export default Content;
