import React from 'react';
//import Auth from './../Auth';


// const auth = new Auth();
// auth.login();

export default function Login(props) {

  return (
    <div className="row">
     <form className="form-signin col-lg-2">
        <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
        <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
        <button className="btn btn-md btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
  );
}


// // helper function
// function sumProducts(products, prop) {
//   return products.reduce((memo, product) => (
//     parseFloat(product[prop], 10) + memo
//   ), 0.0).toFixed(2);
// }


