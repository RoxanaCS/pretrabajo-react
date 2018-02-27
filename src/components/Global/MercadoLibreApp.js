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
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIH+wYJKoZIhvcNAQcEoIIH7DCCB+gCAQExggE6MIIBNgIBADCBnjCBmDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExETAPBgNVBAcTCFNhbiBKb3NlMRUwEwYDVQQKEwxQYXlQYWwsIEluYy4xFjAUBgNVBAsUDXNhbmRib3hfY2VydHMxFDASBgNVBAMUC3NhbmRib3hfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMA0GCSqGSIb3DQEBAQUABIGAMH+krKWWQexZpTUnlEtDSdXVtB/MyAngTvQanyCY3xjnLorEkGwvQ/8AtNUDdwVsUtZCqHbOy3zU027Z4sTjhE/ypvrN0UjdYkeBqzB1OxMwjM0VvgDHnG+oaRFMHJPl7RC6C7AKN9zSuEFesL1c1CWm3WtafJCqLX8L0ZYTcOQxCzAJBgUrDgMCGgUAMIIBRQYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAj4Jg0ZjsRgi4CCASAtzi5Z9dFTz+tIsz7Q3knECJb+uDlhzoCWRGHYhTpbq/AY3WLN+ISHzKVr4iETtR4QDEEcKp9lnN31M8nQyx2S45YR+sefBe/gAqSAfDIgRGmC62dNjzlP/HCvrvAnf8nydOXuRM+evqfieWewCz/UFjUBM5JbUIBZZFWPPRsuCJHrVuwlgYJ6jCpl+22P6s1brPFKjSLcjd3jCbeQzzADPdkjR+vGct8DL+6jWCCX8L4UIjum5f/SnjD5Z71J2qbnsUSs6CgiPXISvgQdqwZcB49QJRiIcTvf/FlKNl2HLgH8TDw5/P5lBDOKWKUAaNDUQK4tECuju0mP61Z0I4vKoy8Ui3XoW+PtkjuWP+jxRXbdAb7YUrxx22QZwSXlJ/CgggOlMIIDoTCCAwqgAwIBAgIBADANBgkqhkiG9w0BAQUFADCBmDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExETAPBgNVBAcTCFNhbiBKb3NlMRUwEwYDVQQKEwxQYXlQYWwsIEluYy4xFjAUBgNVBAsUDXNhbmRib3hfY2VydHMxFDASBgNVBAMUC3NhbmRib3hfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDQxOTA3MDI1NFoXDTM1MDQxOTA3MDI1NFowgZgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMREwDwYDVQQHEwhTYW4gSm9zZTEVMBMGA1UEChMMUGF5UGFsLCBJbmMuMRYwFAYDVQQLFA1zYW5kYm94X2NlcnRzMRQwEgYDVQQDFAtzYW5kYm94X2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAt5bjv/0N0qN3TiBL+1+L/EjpO1jeqPaJC1fDi+cC6t6tTbQ55Od4poT8xjSzNH5S48iHdZh0C7EqfE1MPCc2coJqCSpDqxmOrO+9QXsjHWAnx6sb6foHHpsPm7WgQyUmDsNwTWT3OGR398ERmBzzcoL5owf3zBSpRP0NlTWonPMCAwEAAaOB+DCB9TAdBgNVHQ4EFgQUgy4i2asqiC1rp5Ms81Dx8nfVqdIwgcUGA1UdIwSBvTCBuoAUgy4i2asqiC1rp5Ms81Dx8nfVqdKhgZ6kgZswgZgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMREwDwYDVQQHEwhTYW4gSm9zZTEVMBMGA1UEChMMUGF5UGFsLCBJbmMuMRYwFAYDVQQLFA1zYW5kYm94X2NlcnRzMRQwEgYDVQQDFAtzYW5kYm94X2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAFc288DYGX+GX2+WP/dwdXwficf+rlG+0V9GBPJZYKZJQ069W/ZRkUuWFQ+Opd2yhPpneGezmw3aU222CGrdKhOrBJRRcpoO3FjHHmXWkqgbQqDWdG7S+/l8n1QfDPp+jpULOrcnGEUY41ImjZJTylbJQ1b5PBBjGiP0PpK48cdFMYIBpDCCAaACAQEwgZ4wgZgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMREwDwYDVQQHEwhTYW4gSm9zZTEVMBMGA1UEChMMUGF5UGFsLCBJbmMuMRYwFAYDVQQLFA1zYW5kYm94X2NlcnRzMRQwEgYDVQQDFAtzYW5kYm94X2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTgwMjI3MDExNTM5WjAjBgkqhkiG9w0BCQQxFgQUO/D1YrxbBiHa/HVqKqGOnop2HBQwDQYJKoZIhvcNAQEBBQAEgYByLEdmFwpgsCg0CzLxU7SrbR5mVem1oqrxXt9WHDSUOGHLsM4I72uOcs30Mz6P2Miz4tIeZl6lhnnqQYz+6QzIsMmHRD3Muk+vNYovizd73t6vz6IOPu8Ori1xlVwMOYTI4aQhecQ3HBy+fenUgCiMQsSchIaVNKuEY0aPH7ZzMA==-----END PKCS7-----
              " />
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
