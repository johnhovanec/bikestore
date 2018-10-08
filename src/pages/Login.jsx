import React from 'react';
//import Auth from './../Auth';


// const auth = new Auth();
// auth.login();


class Login extends React.Component {
  constructor(props) {
  super(props);
  }

  logIn() {
    console.log("In logIn...");
  }
  
  render() {
  return (
    <div className="container text-center">
      <div className="row d-flex justify-content-between">
       <form className="form-signin col-lg-4" onSubmit={this.props.handleLogin.bind(this)}>
          <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" pattern=".{8,}" required title="8 characters minimum"></input>
          <button className="btn btn-md btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
  }
}
export default Login;
// // helper function
// function sumProducts(products, prop) {
//   return products.reduce((memo, product) => (
//     parseFloat(product[prop], 10) + memo
//   ), 0.0).toFixed(2);
// }


