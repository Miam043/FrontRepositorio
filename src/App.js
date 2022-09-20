import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

import Navigation from './components/Navigation'
import Login from './components/Login';
import DocumentsList from './components/DocumentsList'
import CreateDocument from './components/CreateDocument'
import CreateUsers from './components/CreateUsers'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>

    <div className="container p-4">
      <Routes>
      <Route path="/Login"  element={<Login/>} />
      <Route path="/" exact element={<DocumentsList/>} />
      <Route path="/edit/:id" element={<CreateDocument/>} />
      <Route path="/create" element={<CreateDocument/>} />
      <Route path="/user" element={<CreateUsers/>} />
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
