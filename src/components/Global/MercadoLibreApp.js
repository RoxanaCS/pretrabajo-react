import React, {Component} from 'react'

class MercadoLibreApp extends Component {
	constructor() {
    	super();
        this.state = { pictures: [],
				};
    }
componentDidMount() {
    fetch('https://api.mercadolibre.com/sites/MLU/search?q=chromecast')
      .then(response => {
        return response.json();
      }).then(data => {
				// se muestran todos los productos en results
				console.log(data);
				let pictures = data.results.map((pic) => {
				return(
					<div key = {pic.results}>
						<img src= {pic.thumbnail} />
					</div>
				)
			})
        this.setState({ pictures: pictures });
				// se muestran solo las imagenes contenidas en thumbnail
				// console.log("state", this.state.pictures);
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
