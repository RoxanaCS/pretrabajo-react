import React, {Component} from 'react'
import './css/Mercado.css';

class MercadoLibreApp extends Component {
	constructor() {
    	super();
        this.state = { pictures: [],
				};

    }
	componentDidMount() {
    fetch('https://api.mercadolibre.com/sites/MLU/search?q=Computación')
      .then(response => {
        return response.json();
      })
			.then(data => {
				// se muestran todos los productos en results
				console.log(data);
				let pictures = data.results.map((pic) => {
				return(
					<div className="product" key = {pic.id}>
						<img className="imgProduct" src= {pic.thumbnail} />
						<p className="titleProduct">{pic.title}</p>
						<p>${pic.price}</p>
						<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
		          <input type="hidden" name="cmd" value="_s-xclick" />
		          <input type="hidden" name="hosted_button_id" value="TKQLJ4VXZNKJ2" />
		          <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
		          <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		        </form>
					</div>
				)
			})
        this.setState({ pictures: pictures });
				// se muestran solo las imagenes contenidas en thumbnail
				console.log(this.state.pictures);
      })
		}
	render() {
	      return (
	        <div className="container">
						{this.state.pictures}
	        </div>
	      )
	    }
}
export default MercadoLibreApp;
