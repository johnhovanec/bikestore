import React from 'react';
import Client from './../Client';
import history from './../history';

class Login extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: ''
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
    // do some sort of verification here
    Client.login("{this.state.username}","{this.state.password}");
    {/*this.props.push(`${this.state.where}/${this.state.what}`)*/}
  }

  
  render() {
  return (
    <div className="container text-center">
      <div className="row d-flex justify-content-between">
       <form className="form-signin col-lg-4" onSubmit={this.submitHandler}>
          <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" 
                   id="inputUsername" 
                   name="username" 
                   defaultValue={this.state.username} 
                   onChange={this.handleInput} 
                   className="form-control" 
                   placeholder="Email address" 
                   required autoFocus></input>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" 
                   id="inputPassword" 
                   name="password" 
                   defaultValue={this.state.password}
                   onChange={this.handleInput} 
                   className="form-control" 
                   placeholder="Password" 
                   pattern=".{8,}" required 
                   title="8 characters minimum"></input>
          <button className="btn btn-md btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
  }
}
export default Login;


