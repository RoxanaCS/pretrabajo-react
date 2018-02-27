import React, { Component } from 'react';
import './css/Content.css';
import MercadoInicio from './MercadoInicio';
import MercadoLibreApp from './MercadoLibreApp';
import promo1 from './images/promo1.png';
import promo2 from './images/promo2.png';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <h1>Esto es lo que tenemos para ti</h1>
        <div className="Sales">
          <div className="Sales1">
            <img src={promo1} alt="promo1" className="Promo1" />
          </div>
          <div className="Sales2">
            <img src={promo2} alt="promo2" className="Promo2" />
          </div>
        </div>
        <MercadoInicio/>
        <MercadoLibreApp />
      </div>
    );
  }
}

export default Content;
