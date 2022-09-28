import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

import Navigation from './components/Navigation'
import Login from './components/Login';
import DocumentsList from './components/DocumentsList'
import CreateDocument from './components/CreateDocument'
import CreateUsers from './components/CreateUsers'
import HomePageInst from './components/HomePageInst';

function App() {
  return (
    <Router>
       <Navigation />
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container p-4">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/user" element={<CreateUsers />} />
                <Route path="/" exact element={<DocumentsList />} />
                <Route path="/HomePageInstS" element={<HomePageInst />} />
                <Route path="/edit/:id" element={<CreateDocument />} />
                <Route path="/create" element={<CreateDocument />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}


export default App;
