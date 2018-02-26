import React, { Component } from 'react';
import './css/Content.css';
import MercadoLibreApp from './MercadoLibreApp'


class Content extends Component {
  render() {
    return (
      <div className="Content">
        <h1>contenido de ejemplo</h1>
        <p>Parrafo de ejemplo</p>
        <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="TKQLJ4VXZNKJ2" />
          <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <MercadoLibreApp />
      </div>
    );
  }
}

export default Content;
