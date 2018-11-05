import React from 'react';
import Client from './../Client';
import history from './../history';

class Register extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    fName: '',
    mName: '',
    lName: '',

  }
  this.submitHandler = this.submitHandler.bind(this)
  this.handleInput = this.handleInput.bind(this)
}

  handleInput(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })
  }

  submitHandler(event) {
    event.preventDefault()
    if (this.state.password != this.state.confirmPassword) {
      alert("The passwords do not match, try again");
      return;
    }
    Client.registerNewCustomer(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.phone,
      this.state.fName,
      this.state.mName,
      this.state.lName,
      );
  }

  render() {
  return (
    <div className="container text-center">
      <div className="row d-flex justify-content-center">
       <form className="form-signin col-lg-4" onSubmit={this.submitHandler}>
          <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Register</h1>
          <label htmlFor="inputUsername" className="sr-only">User Name</label>
            <input type="text" 
                   id="inputUsername" 
                   name="username" 
                   defaultValue={this.state.username} 
                   onChange={this.handleInput} 
                   className="form-control inputLogin" 
                   placeholder="User Name" required
                   required autoFocus>
            </input>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" 
                   id="inputEmail" 
                   name="email" 
                   defaultValue={this.state.email} 
                   onChange={this.handleInput} 
                   className="form-control inputLogin" 
                   placeholder="Email Address" required
                   required autoFocus>
            </input>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" 
                   id="inputPassword" 
                   name="password" 
                   defaultValue={this.state.password}
                   onChange={this.handleInput} 
                   className="form-control inputLogin" 
                   placeholder="Password" 
                   pattern=".{8,}" required 
                   title="8 characters minimum">
            </input>
            <input type="password" 
                   id="confirmPassword" 
                   name="confirmPassword" 
                   defaultValue={this.state.confirmPassword}
                   onChange={this.handleInput} 
                   className="form-control inputLogin" 
                   placeholder="Confirm Password" 
                   pattern=".{8,}" required 
                   title="8 characters minimum">
            </input>
            <input type="text" 
                   id="inputPhone" 
                   name="phone" 
                   defaultValue={this.state.phone}
                   onChange={this.handleInput} 
                   className="form-control inputLogin" 
                   placeholder="Phone"> 
            </input>
            <input type="text" 
                   id="inputFname" 
                   name="fName" 
                   defaultValue={this.state.fName}
                   onChange={this.handleInput} 
                   className="form-control inputLogin" 
                   placeholder="First Name"> 
            </input>
            <input type="text" 
                   id="inputMname" 
                   name="mName" 
                   defaultValue={this.state.mName}
                   onChange={this.handleInput} 
                   className="form-control inputLogin" 
                   placeholder="Middle Name"> 
            </input>
            <input type="text" 
                   id="inputLname" 
                   name="lName" 
                   defaultValue={this.state.lName}
                   onChange={this.handleInput} 
                   className="form-control inputLogin" 
                   placeholder="Last Name">
            </input>
          <button className="btn btn-md btn-primary btn-block" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
  }
}

export default Register;


