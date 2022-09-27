import React from 'react';
import style from '../Css/register.css'
import {Component} from "react";
// import {handleSubmit} from "./javascript/register"
import { BrowserRouter as Router, Switch,
    Route, Redirect,} from "react-router-dom";
import Login from "./login"

function Register() {
    const handleClick = () => {
        const registerForm = document.getElementById('register-form');
        const registerUsername = document.getElementById('form-username');
        const registerPassword = document.getElementById('form-password');

        const headers = {
            'Content-Type': 'application/json'
        }

        const baseUrl = 'http://localhost:8080'


        const handleSubmit = async (e) => {
            e.preventDefault()
            alert("Hello")
            let bodyObj = {
                username: registerUsername.value,
                password: registerPassword.value
            }

            const response = await fetch(`${baseUrl}/register.js`, {
                method: "POST",
                body: JSON.stringify(bodyObj),
                headers: headers
            })
                .catch(err => console.error(err.message))

            const responseArr = await response.json()

            if (response.status === 200) {
                window.location.replace(responseArr[0])
            }
        }

        registerForm.addEventListener("submit", handleSubmit)

        alert("hello");
        return (
            <body className="container">
            <div>
                <link rel="stylesheet" href="../Css/register.css" type={style}></link>
                <div className="container-md">
                    <h1>REGISTER</h1>
                    <form id="register-form">
                        <div className="form-username">
                            <label htmlFor="register-username">Username</label>
                            <input type="text" className="form-control" id="register-username"
                                   placeholder="Username"></input>
                        </div>
                        <div className="form-password">
                            <label htmlFor="register-password">Password</label>
                            <input type="password" className="form-control" id="register-password"
                                   placeholder="Password"></input>
                        </div>
                        <div className="sub-button">
                            <button id="submit-button" type="submit" className="sub-button">Submit!</button>
                            {/*<a href="login.js" className="login-button">Login</a>*/}
                        </div>
                    </form>
                </div>
            </div>
            </body>

        );
    };
}
export default Register;

// class Register extends Component {
//     render() {
//         const handleClick=()=>{
//             const registerForm = document.getElementById('register-form');
//             const registerUsername = document.getElementById('form-username');
//             const registerPassword = document.getElementById('form-password');
//
//             const headers = {
//                 'Content-Type':'application/json'
//             }
//
//             const baseUrl = 'http://localhost:8080'
//
//
//             const handleSubmit = async (e) =>{
//                 e.preventDefault()
//                 alert("Hello")
//                 let bodyObj = {
//                     username: registerUsername.value,
//                     password: registerPassword.value
//                 }
//
//                 const response = await fetch(`${baseUrl}/register.js`, {
//                     method: "POST",
//                     body: JSON.stringify(bodyObj),
//                     headers: headers
//                 })
//                     .catch(err => console.error(err.message))
//
//                 const responseArr = await response.json()
//
//                 if (response.status === 200){
//                     window.location.replace(responseArr[0])
//                 }
//             }
//
//             registerForm.addEventListener("submit", handleSubmit)
//
//             alert("hello");
//         }
//         return (
//             <body className="container">
//             <div>
//                 <link rel="stylesheet" href="../Css/register.css" type={style}></link>
//                 <div className="container-md">
//                     <h1>REGISTER</h1>
//                     <form id="register-form">
//                         <div className="form-username">
//                             <label htmlFor="register-username">Username</label>
//                             <input type="text" className="form-control" id="register-username" placeholder="Username"></input>
//                         </div>
//                         <div className="form-password">
//                             <label htmlFor="register-password">Password</label>
//                             <input type="password" className="form-control" id="register-password" placeholder="Password"></input>
//                         </div>
//                         <div className="sub-button">
//                             <button id="submit-button" type="submit" className="sub-button" onClick={handleClick}>Submit!</button>
//                             {/*<a href="login.js" className="login-button">Login</a>*/}
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             </body>
//         );
//     }
// }
//
// export default Register;
