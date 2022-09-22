import {Component} from "react";

class Register extends Component {
  render() {
    return (
<body className="container">
    <div>
          <link rel="stylesheet" href="./Css/register.css" type="text/css"></link>
          <div className="container-md">
            <h1>REGISTER</h1>
            <form id="register-form">
              <div className="form-username">
                <label htmlFor="register-username">Username</label>
                <input type="text" className="form-control" id="register-username" placeholder="Username"></input>
              </div>
              <div className="form-password">
                <label htmlFor="register-password">Password</label>
                <input type="password" className="form-control" id="register-password" placeholder="Password"></input>
              </div>
              <div className="sub-button">
                <button id="submit-button" type="submit" className="sub-button">Submit</button>
                <a href="login.js" className="login-button">Login</a>
              </div>
            </form>
          </div>
    </div>
    <script src="./javascript/register.js" type="application/javascript"></script>
</body>
    );
  }
}

export default Register;
