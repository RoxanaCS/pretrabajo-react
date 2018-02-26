// mercadolibre-app/index.jsx
import React, {Component} from 'react'
// import MercadoList from '../mercado-list'

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
				console.log(response);
      }).then(data => {
				let pictures = data.results.map((pic) => {
				return(
					<div key = {pic.results}>
						<img src= {pic.thumbnail} />
					</div>
				)
			})
        this.setState({ pictures: pictures });
				console.log("state", this.state.pictures);
      })
		}

	render() {
	      return (
	        <div className="container-fluid">
						{this.state.picture}
	        </div>
	      )
	    }

	export default MercadoLibreApp
