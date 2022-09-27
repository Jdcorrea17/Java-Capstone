import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register.js';
import Login from './pages/login.js';
import Home from './pages/home.js';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact component={Home}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
            </Routes>
        </Router>
    );
}

export default App;
