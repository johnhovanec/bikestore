import React from 'react';

export default function Checkout(props) {

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required></input>
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required></input>
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label for="username">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input type="text" className="form-control" id="username" placeholder="Username" required></input>
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label for="email">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <label for="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required></input>
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="mb-3">
                <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"></input>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select className="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select className="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Maryland</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder="" required></input>
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>
 
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="same-address"></input>
                <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="save-info"></input>
                <label className="custom-control-label" for="save-info">Save this information for next time</label>
              </div>

              <h4 className="mb-3">Payment</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required></input>
                  <label className="custom-control-label" for="credit">Credit card</label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required></input>
                  <label className="custom-control-label" for="debit">Debit card</label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required></input>
                  <label className="custom-control-label" for="paypal">Paypal</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required></input>
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required></input>
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" required></input>
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder="" required></input>
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
          </div>
      </div>
    </div>
  );
}

// helper function



