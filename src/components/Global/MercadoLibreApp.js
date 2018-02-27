import React, {Component} from 'react'
import './css/Mercado.css';

class MercadoLibreApp extends Component {
	constructor() {
    	super();
        this.state = { pictures: [],
          inputValue: '',
				};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    const {inputValue} = this.state
    fetch(`https://api.mercadolibre.com/sites/MLU/search?q=${inputValue}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // se muestran todos los productos en results
        console.log(data);
        let pictures = data.results.map((pic) => {
        return(
          <div className="product" key = {pic.id}>
            {/*<img className="imgProduct" src= {pic.thumbnail} />
            <p className="titleProduct">{pic.title}</p>
            <p>${pic.price}</p>*/}
            <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="encrypted" value="" />
              <input type="text" name="item_name" value="Hot Sauce-12oz. Bottle" />
              <input type="text" name="amount" value="5.95" />
              <input type="text" name="currency_code" value="USD" />
              <input type="image" name="submit" border="0"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif"
              alt="Buy Now" />
              <img alt="" border="0" width="1" height="1"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
            </form>

          </div>
        )
      })
        this.setState({ pictures: pictures });
        // se muestran solo las imagenes contenidas en thumbnail
        console.log(this.state.pictures);
      })
  }
	componentDidMount() {
		}

	render() {
	      return (
	        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
						{this.state.pictures}
	        </div>
	      )
	    }
}
export default MercadoLibreApp;
