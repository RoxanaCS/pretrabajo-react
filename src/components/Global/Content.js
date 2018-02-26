import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <h1>contenido de ejemplo</h1>
        <p>Parrafo de ejemplo</p>
        <MercadoLibreApp />
      </div>
    );
  }
}

export default Content;
