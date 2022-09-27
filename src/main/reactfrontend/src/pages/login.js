import React from 'react';
import styles from '../Css/login.css';
import '../App.css';

function Login(){
    return (
        <body className="container">
        <div>
            <link rel="stylesheet" href="../Css/login.css" type="text/css"></link>
            <div className="login">
                <h1>LOGIN</h1>
                <form id="login-form">
                    <div className="form-username">
                        <label htmlFor="login-username">Username</label>
                        <input type="text" className="form-control" id="login-username" placeholder="Username"></input>
                    </div>
                    <div className="form-password">
                        <label htmlFor="login-password">Password</label>
                        <input type="password" className="form-control" id="login-password" placeholder="Password"></input>
                    </div>
                    <div className="sub-button">
                        <button id="submit-button" type="submit" className="sub-button">Submit?</button>
                        <a href="../pages/register.js" className="register-button">Register</a>
                    </div>
                </form>
            </div>
        </div>
        {/*<script src="src/main/reactfrontend/src/javascript/login.js" type="application/javascript"></script>*/}
        </body>
    );
};

export default Login;

// function LoginHtml() {
//     return (
// <body className="container">
//     <div>
//         {/*<link rel="stylesheet" href="../Css/login.css" type="text/css"></link>*/}
//         <div className="login">
//             <h1>LOGIN</h1>
//             <form id="login-form">
//                 <div className="form-username">
//                     <label htmlFor="login-username">Username</label>
//                     <input type="text" className="form-control" id="login-username" placeholder="Username"></input>
//                 </div>
//                 <div className="form-password">
//                     <label htmlFor="login-password">Password</label>
//                     <input type="password" className="form-control" id="login-password" placeholder="Password"></input>
//                 </div>
//                 <div className="sub-button">
//                     <button id="submit-button" type="submit" className="sub-button">Submit?</button>
//                     <a href="../App" className="register-button">Register</a>
//                 </div>
//             </form>
//         </div>
//     </div>
//     {/*<script src="src/main/reactfrontend/src/javascript/login.js" type="application/javascript"></script>*/}
// </body>
//
//     );
// }
//
