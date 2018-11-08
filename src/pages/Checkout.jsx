import React from 'react';
import Client from './../Client';
import history from './../history';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      mName: '',
      lName: '',
      email: '',
      address1: '',
      address2: '',
      country: 'USA',
      state: 'Maryland',
      zip: '',
      shippingSameAsBilling: true,
      cardType: 'Visa',
      nameOnCard: '',
      cardNumber: '',
      cardExpiration: '',
      cardCVV: '',
      sourceCode: '',  
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleCheckout(event) {
    var data = {
      cartId: this.props.cartId,
      fName: this.state.fName,
      mName: this.state.mName,
      lName: this.state.lName,
      email: this.state.email,
      address1: this.state.address1,
      address2: this.state.address2,
      country: this.state.country,
      state: this.state.state,
      shippingSameAsBilling: this.state.shippingSameAsBilling,
      cardType: this.state.cardType,
      nameOnCard: this.state.nameOnCard,
      cardNumber: this.state.cardNumber,
      cardExpiration: this.state.cardExpiration,
      cardCVV: this.state.cardCVV,
      sourceCode: this.state.sourceCode,
      "cartProducts": this.props.cartProducts,
      "shoppingCartTotal": this.props.shoppingCartTotal,
      "sessionId": Client.getCookie("customerToken"),
    };

    console.log("Calling handleCheckout data: " + data);
    Client.handleCheckout(data);
  }

  render() {
  if (!Client.getCookie("customerToken"))
  {
    history.push("/login");
    return null;
  }
  else
  {
    return (
      <div className="container filler">
        <div className="d-flex justify-content-center">
          <div className="col-md-8">
            <h3>${this.props.shoppingCartTotal}</h3>
            <h5># {this.props.cartProducts.length}</h5>
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      placeholder="Jane" 
                      name="fName"
                      value={this.state.fName}
                      onChange={this.handleInputChange}
                      required>
                    </input>
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <label htmlFor="lastName">Middle name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="middleName" 
                      placeholder="Q." 
                      name="mName"
                      value={this.state.mName}
                      onChange={this.handleInputChange} 
                      required>
                    </input>
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName" 
                      placeholder="Smith" 
                      name="lName"
                      value={this.state.lName}
                      onChange={this.handleInputChange} 
                      required>
                    </input>
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email <span className="text-muted"></span></label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    placeholder="you@example.com">
                  </input>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Address 1</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    placeholder="1234 Main St"
                    name="address1"
                    value={this.state.address1}
                    onChange={this.handleInputChange} 
                    required>
                  </input>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address2" 
                    name="address2"
                    value={this.state.address2}
                    onChange={this.handleInputChange}
                    placeholder="Apartment or suite">
                  </input>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select 
                      id="country" 
                      className="form-control"
                      name="country"
                      value={this.state.country}
                      onChange={this.handleInputChange}>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="Mexico">Mexico</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select 
                      id="state" 
                      className="form-control"
                      name="state"
                      value={this.state.state ? this.state.state : "Choose"}
                      onChange={this.handleInputChange}>
                      <option value="">Choose</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Delaware">Delaware</option>
                      <option value="Virginia">Virginia</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="zip" 
                      placeholder="12345" 
                      name="zip"
                      value={this.state.zip}
                      onChange={this.handleInputChange}
                      required>
                    </input>
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
   
                <div className="custom-control custom-checkbox">
                  <input 
                    type="checkbox" 
                    className="custom-control-input" 
                    name="shippingSameAsBilling"
                    checked={this.state.shippingSameAsBilling}
                    onChange={this.handleInputChange}
                    id="same-address">
                  </input>
                  <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>

                <h4 className="mb-3">Payment</h4>

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input 
                      id="visa" 
                      name="cardType" 
                      type="radio" 
                      className="custom-control-input" 
                      value={this.state.cardType}
                      onChange={this.handleInputChange}
                      required>
                    </input>
                    <label className="custom-control-label" htmlFor="visa">Visa</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input 
                      id="mastercard" 
                      name="cardType" 
                      type="radio" 
                      className="custom-control-input" 
                      value={this.state.cardType}
                      onChange={this.handleInputChange}
                      required>
                    </input>
                    <label className="custom-control-label" htmlFor="mastercard">MasterCard</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input 
                      id="americanexpress" 
                      name="cardType" 
                      type="radio" 
                      className="custom-control-input" 
                      value={this.state.cardType}
                      onChange={this.handleInputChange}
                      required>
                    </input>
                    <label className="custom-control-label" htmlFor="americanexpress">AmericanExpress</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="nameOnCard" 
                      placeholder="Jane Smith" 
                      name="nameOnCard"
                      value={this.state.nameOnCard}
                      onChange={this.handleInputChange}
                      required>
                    </input>
                    <small className="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="cardNumber" 
                      placeholder="1234 5678 1234 5678" 
                      name="cardNumber"
                      value={this.state.cardNumber}
                      onChange={this.handleInputChange}
                      required>
                    </input>
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="cardExpiration" 
                      placeholder="05/21"
                      name="cardExpiration"
                      value={this.state.cardExpiration}
                      onChange={this.handleInputChange}
                      required>
                    </input>
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">CVV</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="cardCVV" 
                      placeholder="123" 
                      name="cardCVV"
                      value={this.state.cardCVV}
                      onChange={this.handleInputChange}
                      required>
                    </input>
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={(e) => this.handleCheckout(e)}>Checkout</button>
              </form>
            </div>
        </div>
      </div>
    );
  }
}
}

export default Checkout;